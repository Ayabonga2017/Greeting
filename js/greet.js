var InputTextElement = document.querySelector(".InputText");
var languageTypeRadioElement = document.querySelector(".languageTypeRadio");
var GreetbtnElement = document.querySelector(".Greetbtn");
var ClearbtnElement = document.querySelector(".Clearbtn");
var namegreet = document.querySelector(".namegreeted");
var counterElem = document.querySelector(".counter");


 var NameStorage = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};
 counterElem.innerHTML=Object.keys(NameStorage).length;

var FactoryGreet = GreetmeFunction(NameStorage);

function Greetme() {

  var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
  if (checkedRadioBtn) {

    var person = InputTextElement.value;
    console.log(person);
    var language = checkedRadioBtn.value;
    console.log(language);
    FactoryGreet.GreetLanguage(person, language);
    namegreet.innerHTML = FactoryGreet.newDisplay();
    counterElem.innerHTML = FactoryGreet.CountPeople();

  }
}


GreetbtnElement.addEventListener('click', function() {
  Greetme(NamesGreted);

  var NamesGreted = InputTextElement.value;
  var Counted=counterElem.value;


localStorage.setItem("users", JSON.stringify(FactoryGreet.GreetMe()));
localStorage.setItem("Counter", JSON.stringify(FactoryGreet.CountPeople()));

if (NameStorage == "") {
InputTextElement.innerHTML = "please enter message";
}
})

//clear button for local storage
ClearbtnElement.addEventListener('click', function() {
  localStorage.clear();
    counterElem.innerHTML= 0;
});
