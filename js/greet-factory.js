function GreetmeFunction(NameStorage) {

  var GreetPerson = "";
 var name = '';
  var Countkeep = NameStorage || {};



  function GreetLanguage(person, language) {

    if (NameStorage != '') {
      name = NameStorage;
    }
    // if (name[person] === undefined){
    //
    //   //add an entry for the user that was greeted in the Object Map
    //   name[person] = '';
    // }

    if (Countkeep[person] === undefined){

      //add an entry for the user that was greeted in the Object Map
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

function newDisplay(){
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
