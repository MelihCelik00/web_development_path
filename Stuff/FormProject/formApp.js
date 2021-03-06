
let userFormDOM = document.querySelector("#liveToastBtn");
userFormDOM.addEventListener("submit", formHandler);

const alertDOM = document.querySelector("#alert");

const alertFunction = (title, message, className = "warning") => `
    <div class="alert alert-${className} alert-dismissible" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
`

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector("#username");
    const SCORE = document.querySelector("#score");
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value); // after sending the request, reset the input boxes
        USER_NAME.value = "";
        SCORE.value = "";
    } else {
        alertDOM.innerHTML = alertFunction("Information:", "Missing information.");
    }
}

/*
<li class="list-group-item d-flex justify-content-between align-items-center">
Cras justo odio
<span class="badge badge-primary badge-pill">14</span>
</li>
*/

let userListDOM = document.querySelector("#userList");
const addItem = (userName, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`

    liDOM.classList.add("list-group-item", "d-flex",
        "justify-content-between", "align-items-center")
    userListDOM.append(liDOM);
}