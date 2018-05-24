var InputTextElement = document.querySelector(".InputText");
var languageTypeRadioElement = document.querySelector(".languageTypeRadio");
var GreetbtnElement = document.querySelector(".Greetbtn");
var ClearbtnElement = document.querySelector(".Clearbtn");
var namegreet = document.querySelector(".namegreeted");
var counterElem = document.querySelector(".counter");

var NameStorage={};
var FactoryGreet = GreetmeFunction(NameStorage);


if (localStorage['NameStorage']) {
  NameStorage = JSON.parse(localStorage['NameStorage']);
}
// var NameStorage = localStorage.getItem('NamesGreted') ? JSON.parse(localStorage.getItem('NamesGreted')) : {};


function Greetme() {

  var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
  if (checkedRadioBtn) {

    var person = InputTextElement.value;
    console.log(person);
    var language = checkedRadioBtn.value;
    console.log(language);
    FactoryGreet.GreetLanguage(person, language);
    namegreet.innerHTML = FactoryGreet.GreetMe();
    counterElem.innerHTML = FactoryGreet.CountPeople();

  }
}


GreetbtnElement.addEventListener('click', function() {
  Greetme(NamesGreted);

  var NamesGreted = InputTextElement.value;
  var Counted=counterElem.value;

counterElem.innerHTML=FactoryGreet.CountPeople();
localStorage.setItem("NamesGreted", JSON.stringify(FactoryGreet.GreetMe()));
localStorage.setItem("Counter", JSON.stringify(FactoryGreet.CountPeople()));
})

//clear button for local storage
ClearbtnElement.addEventListener('click', function() {
  localStorage.clear();
});
