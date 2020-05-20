// let itemList = [] // this will show all the items

// get item from local storage
let itemList = JSON.parse(localStorage.getItem('todo'))
// null
// []
if (itemList == null){
    itemList = []
}
let userEnteredItem = document.getElementById('itemInput')
let previousList = []


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
    save()
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
        result +=  `  [<a href='#' onclick='deleteItem(${i})'>Delete</a>]</li>`// use array function. show list of items
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
    save();
}


// add filter walkthrough - 1 
// let filterTasks = () => {
//     let filterList = itemList.filter(item => item.isDone == false) // item will be each object from the list
//     console.log("this is filtered list",filterList)
//     showList(filterList) // filterList and not itemList because this is the new list you want to show
// }
    // ^ value is false bc the item is not done
    // ^ but it's not showing up because you have to update the UI (showList)

// add filter walkthrough - 2
let filterTasks = () => {
    if(document.getElementById("filterUndone").checked == true){
        let filterList = itemList.filter(item => item.isDone == false) 
        showList(filterList)
    }else {
        showList(itemList)
    }
}

// // save data on local storage -- class walkthrough
// let save = () => {
//     localStorage.setItem("todo",JSON.stringify(itemList)) // setItem takes 2 arguments: key name (save data or call data) & actual value you want to save
// }

// let loadData = () => { //get data from localStorage
//     previousList = JSON.parse(localStorage.getItem("todo")) // the "todo" (key) has to match the one in "setItem"
//     if(previousList.length > 0){ // this means there is previous data
//         itemList = previousList // put previousList into itemList
//         showList(itemList) // include the UI
//     }else{
//         itemList = []
//     }
// }

// need to call loadData -- this function isn't in anything bc we want to call it when we load the page
loadData() 

// if you want to remove all the items
//localStorage.removeItem("todo") 