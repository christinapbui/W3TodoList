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