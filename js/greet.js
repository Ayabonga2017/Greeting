var InputTextElement = document.querySelector(".InputText");
var languageTypeRadioElement = document.querySelector(".languageTypeRadio");
var GreetbtnElement = document.querySelector(".Greetbtn");
var ClearbtnElement = document.querySelector(".Clearbtn");
var namegreet = document.querySelector(".namegreeted");
var counterElem = document.querySelector(".counter");

var FactoryGreet = GreetmeFunction(NameStorage);


var NameStorage = {};

//when the greet button is pressed check if this user was already greeted before
//by looking if the userName exists in namesGreeted if not increment this counter and update the screen
if (NameStorage[userName] === undefined){
    NameStorage++;
    //add an entry for the user that was greeted in the Object Map
    NameStorage[userName] = 0;
    //update the DOM to display the counter
    greetingsElem.innerHTML = greetingsCounter;
}

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
   //NameStorage.push(GreetMe());
})

//clear button for local storage
ClearbtnElement.addEventListener('click', function() {
  localStorage.clear();
});
