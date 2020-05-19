// let itemList = [] // this will show all the items

// get item from local storage
let itemList = JSON.parse(localStorage.getItem('todo'))
// null
// []
let userEnteredItem = document.getElementById('itemInput')


// clear storage 
let clearList = () =>{
    localStorage.setItem('todo', JSON.stringify([]))
    itemList = [];
    showList(itemList);
}

// to add new item to todo list
let addItem = () => {
    let todo = { // this will be the object. push into itemList (line below)
        contents: document.getElementById('itemInput').value, 
        isDone: false
    }
    itemList.push(todo) // add item to the end of the array
    showList(itemList) // send itemList here so it can be mapped & have string created
}

// to display the item on the list (UI function)
let showList = (list) => { // list is the argument// showList will show every item
    // map brings item list. takes li and pushes it to the message
    // message will add up to li tag
    let message = list.map((item,i) =>  {
        let result = `<li>`;
        if (item.isDone){
            result += `<a href="#" onclick='toggleDone(${i})'><input type="checkbox" checked></a>`;
        }else{
            result += `<a href="#" onclick='toggleDone(${i})'><input type="checkbox"></a>`;
        }
        result += ` ${item.contents} `
        result +=  `  |  <a href='#' onclick='deleteItem(${i})'>X</a></li>`// use array function. show list of items
        if (item.isDone){
            result = '<s>' + result + '</s>'
        }else{
            return result
        }
        return result;
    }).join('');
    document.getElementById("resultArea").innerHTML = message
    // local storage
    localStorage.setItem('todo', JSON.stringify(itemList))
};

// shows item list
showList(itemList);

// add X button to delete
let deleteItem = (index) => {
    itemList.splice(index,1)
    showList(itemList);
}

// mark done/not done
let toggleDone = (i) => {
    itemList[i].isDone = !(itemList[i].isDone) // itemList[i] is object, .isDone is key value
    showList(itemList);
}

// add filter 





// to use enter button to add item -- NEED TO FIX
// userEnteredItem.addEventListener("enter key",function(enter){
//     if (enter.keyCode === 13) {
//         addItem();
//     }
// })
