
var lists = [];
var listul =[];


// create a new ul elemenet and append it to last ul
function newList(title) {


  document.getElementById('text').value = "";//clear textbox text
  //clean the @ string
  var cleanValue= title.substr(1);

  var divelement = document.createElement("div");
  var listTitle =  document.createElement("h1");
  var link = document.createElement("a");
  var ul = document.createElement("ul");

  divelement.setAttribute("id",title);
  listTitle.setAttribute("class","list-title");
  ul.setAttribute("class","list");
  ul.setAttribute("id",title+"ul");
  link.setAttribute("id",title+"a");


  document.getElementById('col2').appendChild(divelement); // add a new div inside div id =col2
  link.title = title;
  //link.href = onClick="returnLinkId(this.id)";
  document.getElementById(title).appendChild(link);
  document.getElementById(title+"a").appendChild(listTitle).innerHTML=cleanValue; //add h1 with tittle as var title
  document.getElementById(title).appendChild(listTitle).innerHTML=cleanValue; //add h1 with tittle as var title
  document.getElementById(title).appendChild(ul); // add a ul element inside de new created div

  listul.push(ul);

}

//return id of selected list title
function returnLinkId(id)
{
  alert(id);
}

//get the id of the last ul created
function getLastUl() {
 var lastul = document.querySelector(".col2");
 lastul.lastChild.id;
 console.log(lastul);
 return lastul;
}

//add a new li element to the last ul created
function addItem(value) {

  document.getElementById('text').value = "";//clear textbox text
  var li = document.createElement("li");
  var del  = document.createElement("a");
  li.setAttribute("class","list-li");
  li.setAttribute("id","list-li");
  var last_element = listul[listul.length - 1]; //get the last ul ID



  document.getElementById(last_element.id).appendChild(li).innerHTML = value + '<button class="list-button-x" id="delete">X</button>';
  document.querySelector("#delete").addEventListener('click',(e)=>
  {
      deleteItem(e.target);
  });
  //document.getElementsByClassName('list-li').appendChild(del);
  //document.getElementById(id).appendChild(ul);
}

function deleteItem(id)
{

  if (id.classList.contains('list-button-x')) {
      id.parentElement.remove();
  }

}



function showAlert() {

    //remove alert in 3 seconds
    setTimeOut(function(){
      document.querySelector('.alert').remove(),3000
    });
}

function clearList()
{
  var el = document.querySelector('#col2');
  el.lastChildElement.remove();
}



function checkValue() {
  var tvalue = document.querySelector("#text").value;

  if(tvalue.startsWith("@"))
  {
    //validate if list name already exist
      newList(tvalue);
      lists.push(tvalue);
  }
  else {
    addItem(tvalue);
    lists.push(tvalue);
  }

}

//drag options
