"use strict"

const txtToAdd = document.querySelector('#txtToAdd');
const addBtn = document.querySelector('#addBtn');
const todoListData = document.querySelector('#todoListData');
let arrayToStore;

const reloadList = () => window.location.reload();

const getDataFromLS = () => {
    if (localStorage.getItem('toDoLists') === null) {
        arrayToStore = [];
    } else {
        arrayToStore = JSON.parse( localStorage.getItem('toDoLists') )
    }
}

addBtn.addEventListener('click', () => {
    getDataFromLS();
    arrayToStore.push(txtToAdd.value);
    localStorage.setItem('toDoLists', JSON.stringify(arrayToStore));
    reloadList();
})

// get data
const showData = () => {
    getDataFromLS();
    arrayToStore.map( (listedData, index) => {
        todoListData.innerHTML += `<li>
            <p>${listedData}</p>
            <div>
                <button id="delBtn" onclick="deleteData(${index})" title="Delete"><i class="fas fa-trash"></i></button>
                <button id="editBtn" onclick="editData(${index})" title="Edit"><i class="far fa-edit"></i></button>
            </div>
        </li>`
    } )
}
showData();

const deleteData = (ind) => {
    getDataFromLS();
    arrayToStore.splice(ind, 1);
    localStorage.setItem('toDoLists', JSON.stringify(arrayToStore));
    reloadList();
}

const editData = (ind) => {
    getDataFromLS();
    let editInput = prompt('Re edit', arrayToStore[ind]);
    if (editInput) {
        arrayToStore.splice(ind, 1, editInput);
        localStorage.setItem('toDoLists', JSON.stringify(arrayToStore));
        reloadList();
    } else {
        alert('Updating Cancled...')
    }
}