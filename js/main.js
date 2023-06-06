let todoInput
let errorInfo
let addBtn
let ulList
let newTodo
let popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn


const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
    
}
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterKeyCheck)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)

        addTools()
        
        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wprowadź treść zadania!'
        errorInfo.style.color = 'tomato'
    }
}
const addTools = () => {
    const tools = document.createElement('div')
    tools.classList.add('tools')
    newTodo.append(tools)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'
    
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    tools.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = (e) => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if(e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}


const editTodo = (e) => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}
const closePopup = () => {
    popup.style.display = 'none'
    popup.info.textContent = ''
}
const changeTodoText = () => {
    if(popupInput.value !== ''){
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popup.info.textContent = ''
    } else {
        popupInfo.textContent = 'Wprowadź tekst!'
    }
}
const deleteTodo = (e) => {
    e.target.closest('li').remove()
    const allTodos = document.querySelectorAll('li')
    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
        errorInfo.style.color = 'rgb(2, 84, 161)'
    }
}
const enterKeyCheck = (e) => {
    if(e.key==='Enter'){
        addNewTodo()
    }
}
document.addEventListener('DOMContentLoaded', main)