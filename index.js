// const newItem= document.getElementById('add-iteme').innerText

function addNewItem(item){
    const li= document.createElement('li')
    li.appendChild(document.createTextNode(item))

    const button=document.createElement('button')
    button.className='mark-purchased'
    button.textContent = 'Mark Purchased'

  li.appendChild(button)
  document.querySelector('#items').appendChild(li)
  button.addEventListener('click', function() {
    li.style.textDecoration = 'line-through'; 
    button.disabled = true; 
})
}

document.getElementById('adding-items').addEventListener('submit', function(e) { e.preventDefault()
    const itemInput = document.getElementById('add-iteme');
    const item = itemInput.value  
    if(item){
    addNewItem(item);  
    itemInput.value='';
}

})
document.getElementById('clear-items').addEventListener('click', function(){
    const listOfItems=document.getElementById('items');
    listOfItems.innerHTML=''
})