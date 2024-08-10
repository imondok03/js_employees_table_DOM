var e=document.querySelector("table"),t=!0,n=null,a=function(n){var a=Array.from(e.querySelectorAll("tbody tr"));a.sort(function(e,a){var o=e.children[n].innerText,r=a.children[n].innerText;return(3===n?(o=parseInt(o,10),r=parseInt(r,10)):4===n&&(o=parseFloat(o.replace(/[$,]/g,"")),r=parseFloat(r.replace(/[$,]/g,""))),isNaN(o)||isNaN(r))?t?o.localeCompare(r):r.localeCompare(o):t?o-r:r-o}),a.forEach(function(t){return e.querySelector("tbody").appendChild(t)}),t=!t};e.querySelectorAll("th").forEach(function(e,t){e.addEventListener("click",function(){a(t)})}),e.querySelectorAll("tbody tr").forEach(function(e){e.addEventListener("click",function(){n&&n.classList.remove("active"),e.classList.add("active"),n=e})}),document.body.insertAdjacentHTML("beforeend",'\n<form class="new-employee-form">\n  <label>Name: <input name="name" type="text" data-qa="name"></label>\n  <label>Position: <input name="position" type="text" data-qa="position"></label>\n  <label>Office:\n    <select name="office" data-qa="office">\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>Age: <input name="age" type="number" data-qa="age" min="18" max="90"></label>\n  <label>Salary: <input name="salary" type="number" data-qa="salary" min="0"></label>\n  <button type="button" id="save-button">Save to table</button>\n</form>\n');var o=document.querySelector(".new-employee-form"),r=document.createElement("div");r.className="notification",r.setAttribute("data-qa","notification"),document.body.appendChild(r);var i=function(e,t){r.innerHTML='<span class="title">'.concat(t.toUpperCase(),"</span> ").concat(e),r.className="notification ".concat(t),setTimeout(function(){r.className="notification"},2e3)};document.getElementById("save-button").addEventListener("click",function(){var t=o.querySelector('input[name="name"]').value.trim(),n=o.querySelector('input[name="position"]').value.trim(),a=o.querySelector('select[name="office"]').value,r=o.querySelector('input[name="age"]').value.trim(),l=o.querySelector('input[name="salary"]').value.trim(),c=!0;if(t.length<4&&(i("Name must be at least 4 characters long.","error"),c=!1),(r<18||r>90)&&(i("Age must be between 18 and 90.","error"),c=!1),(!n||!a||!l||isNaN(parseFloat(l))||0>=parseFloat(l))&&(i("All fields are required and salary must be a positive number.","error"),c=!1),c){var u=document.createElement("tr"),d="$".concat(parseFloat(l).toLocaleString("en-US"));u.innerHTML="\n      <td>".concat(t,"</td>\n      <td>").concat(n,"</td>\n      <td>").concat(a,"</td>\n      <td>").concat(r,"</td>\n      <td>").concat(d,"</td>\n    "),e.querySelector("tbody").appendChild(u),i("Employee added successfully!","success"),o.reset()}}),e.querySelectorAll("tbody td").forEach(function(e){e.addEventListener("dblclick",function(){var t=e.innerText,n=document.createElement("input");n.className="cell-input",n.value=t,e.innerText="",e.appendChild(n),n.focus(),n.addEventListener("blur",function(){e.innerText=n.value.trim()||t}),n.addEventListener("keypress",function(a){"Enter"===a.key&&(e.innerText=n.value.trim()||t)})})});
//# sourceMappingURL=index.3c5e57a7.js.map
