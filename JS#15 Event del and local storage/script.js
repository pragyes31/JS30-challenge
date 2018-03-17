const addItems = document.querySelector('form');
let addHtml = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem("items"))||[];
function addItem(e) {
  e.preventDefault();
  // const text = (this.querySelector('[name=item]')).value;
  // how this is used here?
  let itemName = document.querySelector('input[type="text"]').value;
  let itemObj = {
    item: itemName,
    done:false
  }; 
  items.push(itemObj);
  localStorage.setItem("items", JSON.stringify(items));
  addItems.reset();
  populateList(items);
  
}
function populateList(listItem=[]) {
  
    addHtml.innerHTML = listItem.map((item,i)=> {
      return `
<input type="checkbox" id="item${i}" data-index=${i} ${ item.done ? 'checked' : ''}>
<li> <label for="item${i}">${item.item} </label></li>`
  }).join("");
}

function toggleDone(e) {
  if(!e.target.matches("input")) return; 
const el = e.target.dataset.index;
   items[el].done = !items[el].done;
localStorage.setItem("items", JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
addHtml.addEventListener('click', toggleDone);
populateList(items);