document.getElementById("submitButton").onclick = function(){
    let text = document.getElementById("taskInput").value;
    let node = document.createElement("li");    
    let textNode = document.createTextNode(text);    
    node.appendChild(textNode);     
    document.getElementById("taskList").appendChild(node);
  };

  document.getElementById("deleteAll").onclick = function() {
    let ul = document.getElementById("taskList");
    if(ul) {
      while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
      }
    }
  };
 
