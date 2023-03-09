function saveToLocalStorage(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const description=event.target.description.value;
    const category =event.target.category.value;


    const obj={
        amount,
        description,
        category
    }

      localStorage.setItem(obj.amount, JSON.stringify(obj));
      localStorage.setItem(obj.category, JSON.stringify(obj));
      localStorage.setItem(obj.description, JSON.stringify(obj));
   
   
   

   showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const parentElem=document.getElementById('users');
    const childElem=document.createElement('li')
    childElem.textContent=obj.amount +' - '+obj.description+' - '+obj.category;

    const deleteButton=document.createElement('input')
    deleteButton.type="button"
    deleteButton.value="Delete Expense"
    deleteButton.onclick= () => {
        localStorage.removeItem(obj.category)
        localStorage.removeItem(obj.amount)
        localStorage.removeItem(obj.description)
        parentElem.removeChild(childElem)
    }

    const editButton=document.createElement('input')
    editButton.type="button"
    editButton.value="Edit Expense"
    editButton.onclick= () => {
        localStorage.clear()
     
        document.getElementById('amount').value=obj.amount;
        document.getElementById('description').value=obj.description;
        document.getElementById('category').value=obj.category;
       
        parentElem.removeChild(childElem);
      
    
    }
    childElem.appendChild(editButton)
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)

}

