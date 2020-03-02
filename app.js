// DOM - Document Object Model

// let n;

// n = document;
// n = document.all
// n = document.all[1]
// n = document.head
// n = document.title
// n = document.URL

// console.log(n);

// STYLE
// let liste;

// liste = document.querySelector('li');
// liste = document.querySelector('li:last-child')

// liste.style.color = "red";
// liste.style.backgroundColor = "blue";

// liste = document.querySelectorAll('ul li')
// liste[1].style.color = "red"

// for (var i = 0; i < liste.length; i++) {
//     // liste[i].style.backgroundColor = "blue"
//     liste[i].style.cssText = "color : #fff; background-color : green"
// }

// console.log(liste);

// let n;

// n = document.getElementById('course-liste')
// n.textContent = "Coucou"
// n.style.color = "red"

// console.log(n);

// let m;

// m = document.getElementById('liste');
// m.innerHTML
// m.innerHTML = "<h3>Coucou</h3>"

// console.log(m);

// let liste;
// liste = document.getElementsByClassName('collection-item')
// liste[2].style.color = "red"
// liste[3].textContent = "des fraises"

// for (var i = 0; i < liste.length; i++){
//     liste[i].style.color = "red"
// }

// console.log(liste);

// Nodelist

// let n = document.querySelectorAll("li")
// console.log(n[1]);

// n.forEach( function (li) {
//     li.style.backgroundColor = "yellow"
// }
// )


// HTMLCollection

// let n = document.getElementsByTagName("li")

// n.forEach( function (li) {
//      li.style.backgroundColor = "yellow"
//     }
// )

// for(var i = 0; i < n.length; i++ ){
//     n[i].style.backgroundColor = "yellow"
// }

// Array.from(n).forEach(function(li){
//     li.style.backgroundColor = "yellow"
// })

// console.log(n);


// Les Events

// const h3 = document.querySelector("h3")

// h3.onclick = function() {
//     console.log("Coucou");
    
// }

// h3.onmouseover = function() {
//     console.log("Hop là !");
    
// }

// h3.addEventListener("click", function(e){
//     console.log(e.target);
    
// })

// 

// Get Attribute - affiche la valeur d'une propriété

// let li = document.querySelector('li')

// let n = li
// n = li.getAttribute('class')

// console.log(n);


// set Attribute - modifie la valeur d'une propriété

// let li = document.querySelector('li')

// let n = li
// n = li.getAttribute('class')
// n = li.setAttribute('style', 'font-style: italic')
// li.style.fontSize = "30px"

// li.removeAttribute('style')
// console.log(n);

// let img = document.querySelector('img');
// img.onclick = function(){
//     // let src = img.getAttribute("src")
//     // alert(src)
//     let src = img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/fr/f/f5/Dragon_ball_logo.png")
// }

// console.log(img);

// let nav;

// const liste = document.querySelector('li.collection-item')

// nav = liste.parentNode
// nav = liste.parentElement.style.color = "red"

// nav = liste.childNodes
// nav = liste.children
// nav = liste.firstChild
// nav = liste.lastChild
// nav = liste.firstElementChild

// console.log(nav);

// localStorage.setItem('name', 'Actarus')
// localStorage.setItem('age', '100')

// sessionStorage.setItem('name', 'Sandra')

// localStorage.removeItem('name')

// let name = localStorage.getItem('name')

