document.getElementById('submitButton').onclick = function(){
    let text = document.getElementById('taskInput').value;     
    let node = document.createElement("li");    
    let textNode = document.createTextNode(text);    
    node.appendChild(textNode);     
    document.getElementById('taskList').appendChild(node);
  };

