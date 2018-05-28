function GreetmeFunction(NameStorage) {

  var GreetPerson = "";
  var name = '';
  var Countkeep = NameStorage || {};

  function GreetLanguage(person, language) {

    if (NameStorage != '') {
      name = NameStorage;
    }


    if (Countkeep[person] === undefined) {

      Countkeep[person] = '';
    }

    if (language === "English") {

      GreetPerson = "Hey, " + person;

    }
    if (language === "IsiXhosa") {

      GreetPerson = "Mhollo, " + person;

    }
    if (language === "Afrikaans") {

      GreetPerson = "Halo, " + person;
      console.log(language);

    }

  }

  function GreetMe() {

    return Countkeep;
  }

  function newDisplay() {
    return GreetPerson;
  }

  function CountPeople() {
    //console.log(Object.keys(Countkeep).length);
    return Object.keys(Countkeep).length;

  }




  return {
    GreetLanguage,
    GreetMe,
    CountPeople,
    newDisplay
  }
}
