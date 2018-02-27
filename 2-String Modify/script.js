var inputStr = document.getElementById('input');
var display = document.getElementById('result');

/*Function that takes a string as input
* and removes all the duplicates from it
*/
function removeDuplicates( input ) {
  for( var i=0,c; i<input.length-1;i++){
     c = i + 1;
     while(input[i]==input[c]){             //this loop calculates the length for duplicate occuring elements
       if(c<input.length){
         c++;
       } else {
         break;
       }
     }
     if(c != (i+1) ){                        //to check if there are any duplicates
     var part1 = input.substring(0,i);
     var part2 = input.substring(c);
     var newInput = part1+part2;
     return removeDuplicates(newInput);
   }
  }
  return input;                             //returns the final string without any duplicates
}

function disp (){
  var input = inputStr.value;             //takes the input from the user
  display.innerHTML = "Output string is = "+ removeDuplicates(input);
}
