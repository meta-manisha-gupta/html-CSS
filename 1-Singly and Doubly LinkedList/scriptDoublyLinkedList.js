var addBtn = document.getElementById('add');
var removeBtn = document.getElementById('remove');
var searchBtn = document.getElementById('search');
var displayArea = document.getElementById('result');
var msgArea = document.getElementById('messageArea');
var inputData = document.getElementById('input');

var start = null;                                     //to track the start of the list
var end = null;                                       //to track the end of the list

display();

function Node ( data ) {                              //for creating and initializing new node
  this.data = data;
  this.next = null;
  this.prev = null;
}

/*
* A function to add the given element at the rear
* of the list.
*/
function addElement() {
  var data = inputData.value;
  if( data == "" ) {
    msgArea.innerHTML="Element cannot be empty";
    return;
  }
  var node = new Node(data);
  if (start == null) {
    start = node;
    end = node;
  } else {
    end.next = node;
    node.prev = end;
    end = node;
  }
  display();
  inputData.value="";
  msgArea.innerHTML="Element Added!";
}

/* A function to display all the elements in reverse order
* in the List.
*/
function displayRev(){
  var curr = end;
  displayArea.innerHTML="<br>";
  if(end == null){
    msgArea.innerHTML = "No elements to display!!";
    return;
  }
  while ( curr != null) {
    displayArea.innerHTML +="<span>"+ curr.data + "-></span>";
    curr = curr.prev;
  }
  displayArea.innerHTML += "null";
  msgArea.innerHTML = "Elements are in reverse order!";
}

/* A function to display all the elements
* in the List.
*/
function display() {
  var curr = start;
  displayArea.innerHTML="<br>";
  if(start== null){
    msgArea.innerHTML = "No elements to display!!";
    return;
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
  var prevNode = null;
  var currNode = null;
  var nextNode = null;
  var currNode = start;
  if( (start == null) || (data == "")){
    msgArea.innerHTML = "No element to be removed";
    return;
  } else if ( start.data == data ) {
    start = start.next;
    flag++;
  } else {
    currNode = start.next;
    while ( currNode != null ){
      if( currNode.data == data ){
        flag++;
        prevNode = currNode.prev;
        if(currNode.next != null){
        nextNode = currNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      } else {
        prevNode.next = null;
        end = prevNode;
      }
        break;
      }
      currNode = currNode.next;
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
