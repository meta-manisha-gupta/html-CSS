var addBtn = document.getElementById('add');
var removeBtn = document.getElementById('remove');
var searchBtn = document.getElementById('search');
var displayArea = document.getElementById('result');
var msgArea = document.getElementById('messageArea');
var inputData = document.getElementById('input');

var start = null;                                   //to track the start of the list
var end = null;                                     //to track the end of the list

display();

function Node ( data ) {                            //for creating and initializing new node
  this.data = data;
  this.next = null;
}

/*
* A function to add the given element at the rear
* of the list.
*/
function addElement() {
  var data = inputData.value;                             //getting the input value
  if( data == "" ) {
    msgArea.innerHTML="Element cannot be empty";
    return;
  }
  var node = new Node(data);                              //creating a new node to be insertrd
  if (start == null) {                                    //inserting starting node.
    start = node;
    end = node;
  } else {                                                //inserting other nodes
    end.next = node;
    end = node;
  }
  display();
  inputData.value="";
  msgArea.innerHTML="Element Added!";
}

/* A function to display all the elements
* in the List.
*/
function display() {
  var curr = start;
  displayArea.innerHTML="<br>";
  if(start== null){
    msgArea.innerHTML = "No elements to display!!";
  }
  while ( curr != null) {
    displayArea.innerHTML +="<span>"+ curr.data + "-></span>";
    curr = curr.next;
  }
  displayArea.innerHTML += "null";
}

/* A function to search for the given
* element in the List.
*/
function search() {
  var curr = start;
  var flag = 0;
  var data = inputData.value;
  if( data == "" ) {
    msgArea.innerHTML="Element cannot be empty";
    return;
  }
  displayArea.innerHTML="<br>";
  while( curr!=null ) {
    if( curr.data==data ) {
      flag++;
      displayArea.innerHTML +="<span style='background-color:red;color:white;'>"+ curr.data + "-></span>";
    } else {
      displayArea.innerHTML +="<span>" + curr.data + "-></span>";
    }
    curr = curr.next;
  }
  displayArea.innerHTML += "null";
  if( flag == 0) {
    msgArea.innerHTML = "No Element found!!";
  } else {
    msgArea.innerHTML = "Element found!!";
  }
  inputData.value="";
}

/* A function to remove the given element
* from the list.
*/
function remove () {
  var data = inputData.value;
  var flag = 0;
  var prev = null;
  var curr = null;
  var curr = start;
  if( (start == null) || (data == "")){
    msgArea.innerHTML = "No element to be removed";
    return;
  } else if ( start.data == data ) {
    start = start.next;
    flag++;
  } else {
    prev = start;
    curr = start.next;
    while ( curr != null ){
      if( curr.data == data ){
        flag++;
        prev.next = curr.next;
        break;
      }
      curr = curr.next;
      prev = prev.next;
    }
  }
  display();
  inputData.value="";
  if(flag==0){
    msgArea.innerHTML = "Element not found";
  } else {
    msgArea.innerHTML = "Element removed";
  }
}
