let itemList = [] // this will show all the items

let addItem = () => {
    let todo = { // this will be the object. push into itemList (line below)
        contents: document.getElementById('itemInput').value 
    }
    itemList.push(todo)
    showList(itemList) // send itemList here so it can be mapped & have string created
}

let showList = (list) => { // list is the argument// showList will show every item
    // map brings item list. takes li and pushes it to the message
    // message will add up to li tag
    let message = list.map((item,i) => 
    `<li>${item.contents}</li>`).join('') // use array function. show list of items
    document.getElementById("resultArea").innerHTML = message
}

// commas show up because message = array
// map always returns each element in an array - input and output is array
// one way to change is to use "reduce"
// another way is to add .join at the end => will change array to string automatically
// so message will be string at the end

// add X button to delete
// or strikethrough (do/undo)
// add filter 
// make it pretty

// toggling strikethrough
let toggleDone = (i) => {
    itemList[i].isDone = !(itemList[i].isDone) // itemList[i] is object, .isDone is key value
    showList(itemList);
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



// save data on local storage -- class walkthrough
let save = () => {
    localStorage.setItem("todo",JSON.stringify(itemList)) // setItem takes 2 arguments: key name (save data or call data) & actual value you want to save
}

let loadData = () => { //get data from localStorage
    previousList = JSON.parse(localStorage.getItem("todo")) // the "todo" (key) has to match the one in "setItem"
    if(previousList.length > 0){ // this means there is previous data
        itemList = previousList // put previousList into itemList
        showList(itemList) // include the UI
    }else{
        itemList = []
    }
}