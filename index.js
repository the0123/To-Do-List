// Adds task to a list that is then displayed on webpage
document.getElementById("submitButton").onclick = function(){
    // Get text inputted by user
    let text = document.getElementById("taskInput").value;

    // Creates a new list item element 
    let node = document.createElement("li");    

    // Creates a text node with text retrieved from input field
    let textNode = document.createTextNode(text);  
    
    // Appends text node as a child to the item list node
    node.appendChild(textNode);     

    // Appends the list item node as a child to the task list
    document.getElementById("taskList").appendChild(node);

    // Create a delete button for each task
    const deleteButton = document.createElement("button");
    deleteButton.style.margin = "10px";
    deleteButton.textContent = "Delete task";
    node.appendChild(deleteButton);

    // Functionality for delete button
    deleteButton.addEventListener("click", () => {
      deleteButton.parentElement.remove();
    });
  };

  // Used to delete all tasks from the unordered list
  document.getElementById("deleteAll").onclick = function() {
    let unorderedList = document.getElementById("taskList");
    // Checks if unordered list exists
    if(unorderedList) {
      // While it's not empty, remove each task
      while(unorderedList.firstChild) {
        unorderedList.removeChild(unorderedList.firstChild)
      }
    }
  };

  document.getElementById("taskList").onclick = function(event) {
    // Check if the clicked element is a list item (LI)
    if (event.target && event.target.nodeName === "LI") {
        // Toggle the textDecoration style between 'line-through' and 'none'
        event.target.style.textDecoration = event.target.style.textDecoration === "line-through" ? "none" : "line-through";
    }
};
