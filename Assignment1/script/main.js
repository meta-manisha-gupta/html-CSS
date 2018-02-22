var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
var path = "./images/";
var file = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"] ;

for (var i =0; i < file.length ;i++){
  var img = document.createElement('img');
  var imgPath = path + file[i];
  img.setAttribute('src', imgPath);
  thumbBar.appendChild(img);
  img.onclick = function() {
    var imgSrc = event.target.getAttribute('src');
    displayedImage.setAttribute('src', imgSrc);
  }
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",function (){
   if(btn.innerHTML == "Darken"){
     btn.innerHTML = "Lighten";
     overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
   } else {
      btn.innerHTML = "Darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
   }
});
