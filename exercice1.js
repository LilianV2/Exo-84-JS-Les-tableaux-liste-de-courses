// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

let ul = document.getElementById('listeCourse')
let addButton = document.getElementById('add')
let delButton = document.getElementById('del')
let input = document.getElementById('input')


for (let obj of articles){
    let list = document.createElement('li')
    list.innerHTML = obj;
    ul.appendChild(list)
    /*
    list.addEventListener("click", function (){
        list.remove()
    })
    */
}
addButton.addEventListener("click", function (){
    let newLi = document.createElement('li')
    newLi.innerHTML = input.value;
    ul.appendChild(newLi)
    delButton.addEventListener("click", function (){
        newLi.remove()
    })
})














