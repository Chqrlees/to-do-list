// Création d'une croix pour chaque élément de la liste 

var myNodelist = document.getElementsByTagName("LI"); //récupère chaque élément de la liste
var i; 
//Boucle qui consiste a ajouter une croix pour chaque élément d ela lsite
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); //Icone croix
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}



// Création d'une croix pour chaque élément de la liste 

var myNodelist = document.getElementsByTagName("LI"); //récupère chaque élément de la liste
var i; 
//Boucle qui consiste a ajouter une croix pour chaque élément d ela lsite
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u270e"); //Icone croix
  span.className = "editBtn";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Clique sur la croix pour supprimer un élément
var close = document.getElementsByClassName("close"); // selection de la croix
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//clique sur le crayon pour modifie le txt

var editBtn = document.querySelector('span');
var li =  document.querySelector('li');
li.addEventListener('click', function() {
li.contentEditable = true;
}, false );

// Barre onclik

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// var empty = document.getElementsByTagName("LI");
// // var vide = document.getElementsByClassName('empty')
// var i;
// console.log(empty.length)
// for (i = 0; i < empty.length; i++){
//     if (empty.length == i) {
//         vide.style.display = "flex";
    
// }
// }

// Ajout d'éléments a la liste
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    
    li.appendChild(t);
    if (inputValue === '') { //Verification not empty
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var span2 = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var update = document.createTextNode("\u270E")
    span.className = "close";
    span2.className = "editBtn";
    span.appendChild(txt);
    span2.appendChild(update);
    li.appendChild(span);
    li.appendChild(span2);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
