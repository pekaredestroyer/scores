// const names = [ 
//     "Sandrina", 
//     "Kariis", 
//     "Diass", 
//     "Aziz", 
//     "Mohi", 
//     "Nasiba", 
//     "Alon", 
//     "Orif", 
//     "Umar", 
//     "Ilya", 
// ]; 
// const scores = [10, 6, 5, 7, 8, 5, 1, 1, 2, 5]; 

// for (let i = 0; i < names.length; i++) {
//     names[i] = names[i].toLowerCase();
// };

// var button = document.getElementById('button');
// var score = document.getElementsByClassName('score__display')
// button.addEventListener('click', function() {
//     var input = document.getElementById('input').value;
//     input = input.toLowerCase();
    
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] == input) {
//             score[0].innerHTML = scores[i];
//         };
//     };
// }); 

const select = document.querySelector("select");
const result = document.querySelector(".result");

const names = [
  "Sandrina",
  "Kariis",
  "Diass",
  "Aziz",
  "Mohi",
  "Nasiba",
  "Alon",
  "Orif",
  "Umar",
  "Ilya",
];

const scores = [10, 6, 5, 7, 8, 5, 1, 1, 2, 5];

names.forEach((e, index) => {
  select.innerHTML += `<option value="${index}">${e}</option>`;
});

select.addEventListener("change", () => {
result.innerText = scores[select.value];
console.log(select.value);
});