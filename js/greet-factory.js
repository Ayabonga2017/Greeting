function GreetmeFunction() {

  var GreetPerson = "";
  var name = '';


  function GreetLanguage(person, language) {
    if (person != '') {
      name = person;
    }

    if (language === "English") {

    GreetPerson = "Hey, " + person;

} else if (language === "IsiXhosa") {

     GreetPerson = "Mhollo, " + person;


    } else if(language === "Afrikaans"){

      GreetPerson = "Halo, " + person;
    }

  }

  function GreetMe() {

    return GreetPerson;
  }

  return {
    GreetLanguage,
    GreetMe
  }
}
