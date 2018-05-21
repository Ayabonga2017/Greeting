function GreetmeFunction() {

  var GreetPerson = "";
  var name = '';
  var typeLanguage= '';


  function GreetLanguage(person, language) {
    if (person != '') {
      name = person;
    }


    if (language === "English") {

    GreetPerson = "Hey, " + person;

} if (language === "IsiXhosa") {

     GreetPerson = "Mhollo, " + person;

  }if(language === "Afrikaans"){

      GreetPerson = "Halo, " + person;
        console.log(language);

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
