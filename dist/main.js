!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r=["done","edit","delete"],i={state:"newTask",taskID:1},a=function(e){var t=document.querySelector('[data-id="'.concat(e,'"]')),n=document.querySelector("input[name=task-title]").value,r=document.querySelector("textarea[name=task-description]").value,i=document.querySelector("#task-priority").value;t.getElementsByClassName("list-task-title")[0].innerHTML=n,t.getElementsByClassName("list-task-description")[0].innerHTML=r,t.getElementsByClassName("list-task-priority")[0].innerHTML=i},l=function(e,t,n,r){document.querySelector("input[name=task-title]").value=e,document.querySelector("textarea[name=task-description]").value=t,document.querySelector("#task-priority").value=n,r&&a(r)},o=function(){var e=document.querySelector(".task-editor");e.style.display="none"===getComputedStyle(e).display?"block":"none"},s=function(e){var t,n,r,a,s,c=e.target.innerHTML;"delete"===c?e.target.closest(".task").remove():"edit"===c?(t=e.target.closest(".task"),n=t.getElementsByClassName("list-task-title")[0].innerHTML,r=t.getElementsByClassName("list-task-description")[0].innerHTML,a=t.getElementsByClassName("list-task-priority")[0].innerHTML,s=t.getAttribute("data-id"),i.editTaskId=s,l(n,r,a),o()):"done"===c&&function(e){var t=e.target.closest(".task");t.classList.add("task-done"),t.classList.remove("open")}(e)},c=function(){var e=document.querySelector("#task-name").value,t=[].slice.call(document.querySelectorAll(".list-task-title"))||[],n=[].slice.call(document.querySelectorAll(".list-task-priority"))||[],r=document.querySelector("#filter-priority"),i=document.querySelector("#filter-status"),a=r.options[r.selectedIndex].value,l=i.options[i.selectedIndex].value;if(t.forEach((function(t){t.closest(".task").style.display=t.innerHTML.includes(e)?"block":"none"})),"all"!==a&&n.forEach((function(e){var t=e.closest(".task");e.innerHTML!==a&&(t.style.display="none")})),"done"===l)([].slice.call(document.querySelectorAll(".open"))||[]).forEach((function(e){e.style.display="none"}));else if("open"===l){([].slice.call(document.querySelectorAll(".task-done"))||[]).forEach((function(e){e.style.display="none"}))}};document.addEventListener("submit",(function(e){return e.preventDefault()})),document.querySelector("#add-task").addEventListener("click",(function(){if(i.editTaskId)a(i.editTaskId),o(),i.editTaskId=!1;else{var e=function(e){var t=document.createElement("div"),n=document.createElement("p"),a=document.createElement("p"),l=document.createElement("p"),o=document.createElement("button"),c=document.createElement("ul");return t.classList.add("task","open"),t.setAttribute("data-id",i.taskID),i.taskID++,n.innerHTML=e.title,n.classList.add("list-task-title"),a.innerHTML=e.description,a.classList.add("list-task-description"),l.innerHTML=e.priority,l.classList.add("list-task-priority"),o.innerHTML="...",o.classList.add("list-task-actions"),o.addEventListener("click",(function(e){!function(e){var t=e.target.nextSibling;t.style.display="none"===t.style.display?"block":"none"}(e)})),c.classList.add("task-actions"),c.style.display="none",t.appendChild(n),t.appendChild(a),r.forEach((function(e){var t=document.createElement("li"),n=document.createElement("button");n.innerHTML=e,n.classList.add(e),n.addEventListener("click",(function(e){s(e)})),t.appendChild(n),c.appendChild(t)})),t.appendChild(l),t.appendChild(o),t.appendChild(c),t}(Object.assign(function(){var e={},t=document.querySelector("#task-priority");return e.priority=t.options[t.selectedIndex].value,e.title=document.querySelector("input[name=task-title]").value,e.description=document.querySelector("textarea[name=task-description]").value,e}())),t=document.querySelector("#task-list");n=e,t.appendChild(n),l("","","high"),o()}var n})),document.querySelector("#cancel-task").addEventListener("click",(function(){l("","","high"),o()})),document.querySelector("#create").addEventListener("click",o),document.querySelector("#task-name").addEventListener("input",c),document.querySelector("#filter-priority").addEventListener("change",c),document.querySelector("#filter-status").addEventListener("change",c),l("","","normal")},function(e,t){}]);