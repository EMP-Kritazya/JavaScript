let todoList = [];
let myHTML = "";

function add() {
  const task = document.querySelector(".task");
  const name = task.value;

  const date = document.querySelector(".date");
  const due = date.value;

  todoList.push({
    name: name,
    due: due,
  });
  task.value = "";
  date.value = "";

  renderList();
  myHTML = "";
}

function renderList() {
  let field = document.querySelector(".details");
  myHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    myHTML += `
          <div> ${todoList[i].name} </div>
          <div> ${todoList[i].due} </div>
          <div>
            <button class = "del-btn" onclick = "
              todoList.splice(${i}, 1);
              renderList();
            ">Delete</button></div>
          `;
  }
  field.innerHTML = myHTML;
}
