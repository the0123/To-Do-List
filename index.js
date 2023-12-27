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
  };

  
  // Used to delete all tasks from the unordered list
  document.getElementById("deleteAll").onclick = function() {
    let ul = document.getElementById("taskList");
    // Checks if unordered list exists
    if(ul) {
      // While it's not empty, remove each task
      while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
      }
    }
  };
 
