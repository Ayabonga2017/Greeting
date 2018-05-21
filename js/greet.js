var nameElem = document.querySelector('.name');
var LanguageAddBtn = document.querySelector('.LanguageAddBtn');
var greetmeElem = document.querySelector('.greetme');
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

    var person = greetmeElem.value;
    console.log(person);
    var language = checkedRadioBtn.value;
    console.log(language);
    languageChange.GreetLanguage(person, language);
    nameElem.innerHTML = languageChange.GreetMe();

  }
}

for (var i = 0; i < NameStorage.length; i++) {
  var name = NameStorage[i];
  console.log(name);
}
