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


// Clique sur la croix pour supprimer un élément
var close = document.getElementsByClassName("close"); // selection de la croix
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

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
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

