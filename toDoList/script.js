//selects the whole form
const form = document.querySelector('.input-field');
//text inside the input element
const input = document.querySelector('input');

const taskList = document.querySelector('.task-list');


// function to add a new task
function addTask(event) {
    event.preventDefault();

    const inputValue = input.value;
    console.log(inputValue);
    //create necessary elements for a new task
    const listItem = document.createElement('li');
    //create div element called taskDiv
    const taskDiv = document.createElement('div');
    //create checkbox element
    const checkbox = document.createElement('input');
    //set the type of the checkbox to checkbox
    checkbox.type = 'checkbox';
    //create span element called taskName
    const taskName = document.createElement('span');
    //give it an innerText a task value
    taskName.innerText = inputValue;
    //create a delete button element
    const deleteButton = document.createElement('button');
    //add the necessary classes to each element 

    //
    taskDiv.classList.add('task-info');
    deleteButton.classList.add('delete');

    //targetting the innetHTML of the button
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;    
    
    //apend the elements in line 16-28 to the DOM or the elements will not show up on the page
    taskList.appendChild(listItem);
    listItem.appendChild(taskDiv);
    listItem.appendChild(deleteButton);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskName);
    input.value = '';

}

// Function to modify a task
function taskModify(event) {
    const clickedEle = event.target;
    console.log(clickedEle);
    // check if the delete button was clicked
    if (clickedEle.classList[1] === 'fa-trash') {
        const task = clickedEle.parentElement.parentElement;
        task.remove();
    }

    // check if the text was clicked
    if (clickedEle.tagName.toLowerCase() === 'span'){
        const task = clickedEle.innerHTML;
        clickedEle.innerHTML = `<input class="edit-input" type="text" value="${task}"/>`;

        const editInput = clickedEle.querySelector('input');
        editInput.addEventListener('blur', ()=>{
            const newValue = editInput.value;
            clickedEle.innerHTML = newValue;
        });
    }
}

//event listeners to add a new task and edit, delete a task
form.addEventListener('submit', addTask);

taskList.addEventListener('click', taskModify);  