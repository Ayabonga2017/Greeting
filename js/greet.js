var InputTextElement = document.querySelector(".InputText");
var languageTypeRadioElement = document.querySelector(".languageTypeRadio");
var GreetbtnElement = document.querySelector(".Greetbtn");
var ClearbtnElement = document.querySelector(".Clearbtn");
var namegreet = document.querySelector(".namegreeted");
var counterElem = document.querySelector(".counter");


var NameStorage = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};
var input = document.getElementsByTagName('Input')[0]
input.oninput = function(){
  input.value = input.value.toUpperCase();
}

var FactoryGreet = GreetmeFunction(NameStorage);

counterElem.innerHTML = Object.keys(NameStorage).length;

function Greetme() {
  var languagetypes = document.querySelector("input[name='languageType']:checked");
  if (languagetypes) {
    var language = languagetypes.value;
  }


  var person = InputTextElement.value;


  if (!languagetypes) {
    return namegreet.innerHTML = "Please select language";
  }
  var language = languagetypes.value;
  if (person === "") {

    return namegreet.innerHTML = "Please enter name";
  }

  FactoryGreet.GreetLanguage(person, language);
  namegreet.innerHTML = FactoryGreet.GreetedPerson();
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
