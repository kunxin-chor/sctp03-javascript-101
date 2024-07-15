// C = Create: adding new data to the database
// R = Read: get existing information
// U = Update: update existing information in the database
// D = Delete: remove existing information from the database

// represent our database
// - array: represents the entire database
// - object: represents one record
let todos = [
    {
        id: 1,  // unique identify each todo in the list
        name: "Wash the toilet",
        urgency: 3 // 1 is the least urgent, 5 is the most urgent
    },
    {
        id: 9999,
        name: "Do laundry",
        urgency: 5
    }
];

// create: add a new todo
// first parameter: the array that will store the new todo
// second parameter
function addTodo(todos, name, urgency) {
    // create the object that represents the record
    let todoRecord = {
        "id": parseInt(Math.random() * 1000), // stop gap measure: use random number for ids is only valid for testing
        "name": name,
        "ugrency": urgency
    }
    // add the record to the array
    todos.push(todoRecord);
}

// id is the id of the record that we want to modify
function updateTodo(todos, id, name, urgency) {
    let foundRecord = null;  // null -> not found, doesn't exist yet
    
    // linear search: find the todo that matches the id given in the function
    for (let t of todos) {
        if (t.id === id) {
            foundRecord = t;
        }
    }
    
    // modify the record
    foundRecord.name = name;
    foundRecord.ugrency = urgency;

}

function deleteTodo(todos, id) {
    // use splice to delete an item from an array
    const index = todos.findIndex(function(t){
        return t.id === id;
    });
    todos.splice(index, 1);
}


addTodo(todos, "Wash the car", 3);

console.log("---- after adding Wash the Car----");
console.log(todos);


updateTodo(todos, 1, "Mop the Floor", 1);
console.log("---- after changing todo with  id 1 to Mop the Floor ---")
console.log(todos);

deleteTodo(todos, 9999);

console.log("--- after deleting todo with id 9999");
console.log(todos);