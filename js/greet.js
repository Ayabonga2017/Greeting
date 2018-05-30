var InputTextElement = document.querySelector(".InputText");
var languageTypeRadioElement = document.querySelector(".languageTypeRadio");
var GreetbtnElement = document.querySelector(".Greetbtn");
var ClearbtnElement = document.querySelector(".Clearbtn");
var namegreet = document.querySelector(".namegreeted");
var counterElem = document.querySelector(".counter");


var NameStorage = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};

var FactoryGreet = GreetmeFunction(NameStorage);

counterElem.innerHTML = Object.keys(NameStorage).length;

function Greetme() {
  var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
  if (checkedRadioBtn) {
    var lang = checkedRadioBtn.value;
  }

  if (!checkedRadioBtn) {
    return namegreet.innerHTML = "Please select language";
  }

  var language = checkedRadioBtn.value;
  var person = InputTextElement.value;

  if (person ==='') {
    return namegreet.innerHTML = "Please enter name";
  } else if (!person) {
    return counterElem.innerHTML =0;

  }
namegreet.innerHTML = FactoryGreet.GreetedPerson();
  FactoryGreet.GreetLanguage(person, language);

  counterElem.innerHTML = FactoryGreet.CountPeople();
  localStorage.setItem("Names", JSON.stringify(FactoryGreet.GreetMe()));
  localStorage.setItem("Counter", JSON.stringify(FactoryGreet.CountPeople()));
}


GreetbtnElement.addEventListener('click', function() {
  Greetme();
})

ClearbtnElement.addEventListener('click', function() {
  localStorage.clear();
  counterElem.innerHTML = 0;
});
