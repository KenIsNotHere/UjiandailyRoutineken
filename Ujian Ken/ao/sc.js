document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
   
    var inputField = document.getElementById('inputField');
    var list = document.getElementById('list');
   
    var newItem = document.createElement('li');
    var span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
   
    span.className = "close";
    span.appendChild(txt);
    newItem.appendChild(document.createTextNode(inputField.value));
    newItem.appendChild(span);
   
    list.appendChild(newItem);
   
    inputField.value = '';
   
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
   });