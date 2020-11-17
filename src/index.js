import './scss/style.scss';

const arrFunction = () => {
  const testLength = 'count symvol';
  console.log(`length ${testLength.length}`);
  const arr = ['test', 'apple', 'name'];
  // arr.pop(arr); удаление елемента с конца массива
  // arr.shift(arr); удаление елемента с начала массива
  // delete arr[0]; удаление елемента с массива по индексу
  // arr.push('last element in arr'); дбавление елемента в конец массива
  // arr.unshift('new el'); добавление елемента в начало строки
  const newObj = {
    key1: 'key1',
    key2: 'key2',
    key3: 'key3',
  };
  arr.unshift(newObj);
  // delete arr[0];
  // console.log(arr[0]);
  // const deleteElArr = arr.splice(0, 2, 'replaced first el
  //  = obj on this text', 'and add new el in arr');
  // метод splice заменяет первые два елемента на значения которые я указал
  // console.log(deleteElArr);
  // добавление елемента в массив методом splice пятым елементом
  // arr.splice(5, 0, 'test');
  arr.splice(-1, 0, 'testing', 'splice');
  console.log(`${arr} ${arr.length}`);
  // копирование елеметов массива методом slice,
  // и возвращает новый массив, можно скопировать и весь массив
  // const arrSlice = arr.slice(1, 5);
  // console.log(arrSlice);
  // console.log(`${arrSlice} ${arrSlice.length}`);
  // метод splice удалил четвертый елемент с массива, елементы сдвинулись и массив стал
  // arr.splice(3, 1);
  // const concatObj = {
  //   key1: 'key1',
  //   key2: 'key2',
  //   key3: 'key3',
  // };


  // принимает неограниченное количество аргументов,
  // в результате получаю новый массив в котором к старому массиву добавятся
  // новые елементы и целые массивы которые я указал аргументами

  //   Но если объект имеет специальное свойство Symbol.isConcatSpreadable,
  //   то он обрабатывается concat как массив: вместо него добавляются его числовые свойства.
  //   let arr = [1, 2];

  // let arrayLike = {
  //   0: "что-то",
  //   1: "ещё",
  //   [Symbol.isConcatSpreadable]: true,
  //   length: 2
  // };

  // alert( arr.concat(arrayLike) );  1,2,что-то,ещё
  // const concatArr = ['key1', 'key2', 'key3'];
  // const testConcat = concatArr.concat(concatObj, ['key4', 'key5']);
  // console.log(testConcat);
};
arrFunction();

// const priorityArray = ['low', 'normal', 'high'];
const taskActions = ['done', 'edit', 'delete'];

const formState = {
  state: 'newTask',
  taskID: 1,
};

const saveChanges = (id) => {
  const task = document.querySelector(`[data-id="${id}"]`);
  const title = document.querySelector('input[name=task-title]').value;
  const description = document.querySelector('textarea[name=task-description]').value;
  const priority = document.querySelector('#task-priority').value;

  task.getElementsByClassName('list-task-title')[0].innerHTML = title;
  task.getElementsByClassName('list-task-description')[0].innerHTML = description;
  task.getElementsByClassName('list-task-priority')[0].innerHTML = priority;
};

const updateFormState = (title, description, priority, id) => {
  document.querySelector('input[name=task-title]').value = title;
  document.querySelector('textarea[name=task-description]').value = description;
  document.querySelector('#task-priority').value = priority;
  if (id) saveChanges(id);
};

const showEditFormToggle = () => {
  const form = document.querySelector('.task-editor');
  form.style.display = (getComputedStyle(form).display === 'none') ? 'block' : 'none';
};

const editTask = (e) => {
  const card = e.target.closest('.task');
  const title = card.getElementsByClassName('list-task-title')[0].innerHTML;
  const description = card.getElementsByClassName('list-task-description')[0].innerHTML;
  const priority = card.getElementsByClassName('list-task-priority')[0].innerHTML;
  const id = card.getAttribute('data-id');
  formState.editTaskId = id;
  updateFormState(title, description, priority);
  showEditFormToggle();
};
const doneTask = (e) => {
  const card = e.target.closest('.task');
  card.classList.add('task-done');
  card.classList.remove('open');
};

const runAction = (btn) => {
  const action = btn.target.innerHTML;
  if (action === 'delete') btn.target.closest('.task').remove();
  else if (action === 'edit') editTask(btn);
  else if (action === 'done') doneTask(btn);
};

const actionsToggle = (btn) => {
  const neighbor = btn.target.nextSibling;
  neighbor.style.display = (neighbor.style.display === 'none') ? 'block' : 'none';
};


const createElem = (details) => {
  const el = document.createElement('div');
  const name = document.createElement('p');
  const description = document.createElement('p');
  const priority = document.createElement('p');
  const btn = document.createElement('button');
  const actions = document.createElement('ul');

  el.classList.add('task', 'open');
  el.setAttribute('data-id', formState.taskID);
  // eslint-disable-next-line no-plusplus
  formState.taskID++;
  name.innerHTML = details.title;
  name.classList.add('list-task-title');
  description.innerHTML = details.description;
  description.classList.add('list-task-description');
  priority.innerHTML = details.priority;
  priority.classList.add('list-task-priority');
  btn.innerHTML = 'show more';
  btn.classList.add('list-task-actions');
  btn.addEventListener('click', (e) => { actionsToggle(e); });
  actions.classList.add('task-actions');
  actions.style.display = 'none';

  el.appendChild(name);

  el.appendChild(description);
  taskActions.forEach((item) => {
    const action = document.createElement('li');
    const actionBtn = document.createElement('button');
    actionBtn.innerHTML = item;
    actionBtn.classList.add(item);
    actionBtn.addEventListener('click', (e) => { runAction(e); });
    action.appendChild(actionBtn);
    actions.appendChild(action);
  });
  el.appendChild(priority);
  el.appendChild(btn);
  el.appendChild(actions);
  return el;
};

const getNewTaskDetails = () => {
  const details = {};
  const temp = document.querySelector('#task-priority');
  details.priority = temp.options[temp.selectedIndex].value;
  details.title = document.querySelector('input[name=task-title]').value;
  details.description = document.querySelector('textarea[name=task-description]').value;
  return details;
};

const appendToDOM = (DOM, newElem) => DOM.appendChild(newElem);

const addTask = () => {
  if (formState.editTaskId) {
    saveChanges(formState.editTaskId);
    showEditFormToggle();
    formState.editTaskId = false;
  } else {
    const details = Object.assign(getNewTaskDetails());
    const elem = createElem(details);
    const parrent = document.querySelector('#task-list');
    appendToDOM(parrent, elem);
    updateFormState('', '', 'high');
    showEditFormToggle();
  }
};

const cancelTask = () => {
  updateFormState('', '', 'high');
  showEditFormToggle();
};

const filterTasks = () => {
  const filterString = document.querySelector('#task-name').value;
  const allTasks = [].slice.call(document.querySelectorAll('.list-task-title')) || [];
  const allTasksPriority = [].slice.call(document.querySelectorAll('.list-task-priority')) || [];
  const temp = document.querySelector('#filter-priority');
  const temp2 = document.querySelector('#filter-status');
  const filterPriority = temp.options[temp.selectedIndex].value;
  const filterStatus = temp2.options[temp2.selectedIndex].value;

  allTasks.forEach((item) => {
    const cardTemp = item.closest('.task');
    cardTemp.style.display = (item.innerHTML.includes(filterString)) ? 'block' : 'none';
  });

  if (filterPriority !== 'all') {
    allTasksPriority.forEach((item) => {
      const cardTemp = item.closest('.task');
      if (item.innerHTML !== filterPriority) cardTemp.style.display = 'none';
    });
  }

  if (filterStatus === 'done') {
    const open = [].slice.call(document.querySelectorAll('.open')) || [];
    open.forEach((item) => {
      const el = item;
      el.style.display = 'none';
    });
  } else if (filterStatus === 'open') {
    const done = [].slice.call(document.querySelectorAll('.task-done')) || [];
    done.forEach((item) => {
      const elem = item;
      elem.style.display = 'none';
    });
  }
};


// init start state
document.addEventListener('submit', (e) => e.preventDefault());
document.querySelector('#add-task').addEventListener('click', addTask);
document.querySelector('#cancel-task').addEventListener('click', cancelTask);
document.querySelector('#create').addEventListener('click', showEditFormToggle);
document.querySelector('#task-name').addEventListener('input', filterTasks);
document.querySelector('#filter-priority').addEventListener('change', filterTasks);
document.querySelector('#filter-status').addEventListener('change', filterTasks);
updateFormState('', '', 'normal');
