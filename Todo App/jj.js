var list = document.getElementById("todo-list");




function addtodo(){

var add = document.getElementById("todo");


var li = document.createElement('li')
var li_text = document.createTextNode(add.value)
li.setAttribute("class","bb")

li.appendChild(li_text)


var del_btn = document.createElement('button')
var btn_txt = document.createTextNode('dELETE')
del_btn.setAttribute("class","btn")
del_btn.appendChild(btn_txt)
del_btn.setAttribute("onclick", "deleteItem(this)")

var edit_btn = document.createElement('button')
var edit_btn_txt = document.createTextNode('edit')
edit_btn.setAttribute("class","btn")
edit_btn.appendChild(edit_btn_txt)
edit_btn.setAttribute("onclick", "editItem(this)")




li.appendChild(edit_btn)
li.appendChild(del_btn)


todo-list.appendChild(li)


add.value = ""


}

function deleteItem(e){

e.parentNode.remove();
}

function editItem(e){
 
    var val = prompt("enter new value")

    e.parentNode.firstChild.nodeValue = val


}
function deleteAll() {
    list.innerHTML = ""
}


