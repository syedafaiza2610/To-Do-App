let inputs = document.getElementById('inp');
let text = document.querySelector('.text');

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newElement = document.createElement('ul');
        newElement.innerHTML = `
            ${inputs.value} 
            <i class="fas fa-edit edit-icon" onclick="editTask(this)"></i>
            <i class="fas fa-trash delete-icon" onclick="removeTask(this)"></i>
        `;
        text.appendChild(newElement);
        inputs.value = "";
    }
}

function removeTask(e) {
    e.parentElement.remove();
}

function editTask(e) {
    let taskTextElement = e.previousSibling;
    let newText = prompt("Edit task:", taskTextElement.textContent.trim());
    
    if (newText !== null && newText !== "") {
        taskTextElement.textContent = newText;
    }
}

function deleteall() {
    text.innerHTML = "";
}
