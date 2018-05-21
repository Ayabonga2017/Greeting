var nameElem = document.querySelector('.name');
var LanguageAddBtn = document.querySelector('.LanguageAddBtn');
var greetmeElem = document.querySelector('.greetme');
var languageTypeRadioElem = document.querySelector('.languageTypeRadio')

// console.log(JSON.stringify(names));
var NameStorage = [];
var languageChange = GreetmeFunction();
//take the names from localStorage
if (localStorage['NameStorage']) {
  NameStorage = JSON.parse(localStorage['NameStorage']);
}

LanguageAddBtn.addEventListener('click', function() {
  var theName = greetmeElem.value;

  addName(theName);
  NameStorage.push(theName);

  localStorage['NameStorage'] = JSON.stringify(NameStorage);
});

function addName(names) {

  var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
  if (checkedRadioBtn) {

    var person = greetmeElem.value; //languageChange.greetP();
    console.log(person);
    var language = languageTypeRadioElem.value;
    greetmeElem.innerHTML = languageChange.GreetLanguage(person ,language);

  }
}

for (var i = 0; i < NameStorage.length; i++) {
  var name = NameStorage[i];
  console.log(name);
}
