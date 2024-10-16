// ********* dom part start *********
let headInput    = document.querySelector('.headInput')
let headButton   = document.querySelector('.headButton')
let todoList     = document.querySelector('.todoList')
// ---------- dom part end ------------
// ******** function part start ********
headButton.addEventListener('click' , ()=>{
    if(headInput.value == ''){
        alert('Enter your task.')
    }else{
        // create element ===========================
        let singleTodo         = document.createElement('div')
        let singleTodoInput    = document.createElement('input')
        let editButton         = document.createElement('button')
        let removeButton       = document.createElement('button')
        // making child =============================
        todoList.appendChild(singleTodo)
        singleTodo.appendChild(singleTodoInput)
        singleTodo.appendChild(editButton)
        singleTodo.appendChild(removeButton)
        // adding class name ========================
        singleTodo.classList.add('singleTodo')
        editButton.classList.add('editButton')
        removeButton.classList.add('removeButton')
        // adding content to the tags ================
        editButton.innerHTML    = 'Edit'
        removeButton.innerHTML  = 'Remove'
        // adding data into input field ==============
        singleTodoInput.value   = headInput.value
        headInput.value         = ''
        // setting input attributes ==================
        singleTodoInput.setAttribute('readonly','readonly')
        // deleting data =============================
        removeButton.addEventListener('click', ()=>{
            singleTodo.remove('')
        })
        // edit button correction ====================
        editButton.addEventListener("click" , ()=>{
            if (editButton.innerHTML == "Edit"){
                editButton.innerHTML      = "Save"
                editButton.style = "background:green;color:white;"
                singleTodoInput.removeAttribute('readonly' , 'readonly')
            }
            else{
                editButton.innerHTML      = "Edit"
                singleTodoInput.setAttribute("readonly" ,"readonly")
                editButton.style = "background:royalblue;"

            }
        })

    }
})
// Enter Button function *****************************

