let amount=document.getElementById("amount");
let description=document.getElementById("description");
let category=document.getElementById("category");
let container=document.getElementById("expenseContainer");
let expenseList=document.createElement('ul');
expenseList.className = 'expenseList';
expenseList.id = 'list';
container.appendChild(expenseList);
const data = {};
document.getElementById("expenseForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.forEach((value, key) => {
        data[key] = value;
    });

    const expenseData = JSON.stringify(data);
    localStorage.setItem(data.amount,expenseData);

    let expense=document.createElement('li');
    expense.appendChild(document.createTextNode(amount.value));
    expense.appendChild(document.createTextNode(' - '));
    expense.appendChild(document.createTextNode(description.value));
    expense.appendChild(document.createTextNode(' - '));
    expense.appendChild(document.createTextNode(category.value));

    let deleteBtn=document.createElement('button');
    deleteBtn.className = 'btn btn-danger delete';
    deleteBtn.appendChild(document.createTextNode('Delete Expense'));
    expense.appendChild(deleteBtn);
    let editBtn=document.createElement('button');
    editBtn.className = 'btn btn-primary edit';
    editBtn.appendChild(document.createTextNode('Edit Expense'));
    expense.appendChild(editBtn);
    expenseList.appendChild(expense);
});

document.getElementById("list").addEventListener('click',function(e) {
    if(e.target.classList.contains('delete')){
        let expense=e.target.parentElement;
        let removeExpense = expense.firstChild.textContent;
        localStorage.removeItem(removeExpense);
        document.getElementById("list").removeChild(expense);
    }
});

document.getElementById("list").addEventListener('click',function(e) {
    if(e.target.classList.contains('edit')){
        let expense=e.target.parentElement;
        let removeExpense = expense.firstChild.textContent;

        amount.value = expense.childNodes[0].textContent;
        description.value = expense.childNodes[2].textContent;
        category.value = expense.childNodes[4].textContent; 
        
        localStorage.removeItem(removeExpense);
        document.getElementById("list").removeChild(expense);
    }
});