function addItem() {
    var list = document.getElementById("editable-list");
    var item = document.createElement("li");
    item.innerText = "New Item";
    list.appendChild(item);
  }
  
  function deleteItem() {
    var list = document.getElementById("editable-list");
    var items = list.getElementsByTagName("li");
    if (items.length > 0) {
      list.removeChild(items[items.length - 1]);
    }
  }