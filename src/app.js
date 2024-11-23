/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log("nuevo mensaje");
  document.querySelector("#excuse").innerHTML = generadorExcusas();
};

function generadorExcusas() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];

  //            0             1             2           3

  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  //almacenar los valores aleatorios trabajaremos con el objeto Math y sus metodos

  let whorandom = Math.floor(Math.random() * who.length);
  let actionrandom = Math.floor(Math.random() * action.length);
  let whatrandom = Math.floor(Math.random() * what.length);
  let whenrandom = Math.floor(Math.random() * when.length);

  return `${who[whorandom]} ${action[actionrandom]}  ${what[whatrandom]} ${when[whenrandom]}`;
}
