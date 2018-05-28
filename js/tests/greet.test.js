describe("Greetings in different languges", function() {

  it("should return Mhollo for IsiXhosa", function() {

    var Greet = GreetmeFunction();

    Greet.GreetLanguage("Aya", 'IsiXhosa');

    assert.equal('Mhollo, Aya', Greet.newDisplay());

  })
  it('should Greet Shaun in english', function() {
    var greet = GreetmeFunction();

    greet.GreetLanguage("Shaun", 'English');

    assert.equal('Hey, Shaun', greet.newDisplay());
  })

  it('should be able to Greet Jacob in Afrikaans', function() {
    var greet = GreetmeFunction();

    greet.GreetLanguage("Jacob", 'Afrikaans');

    assert.equal('Halo, Jacob', greet.newDisplay());
  })

  it('should greet 3 people in different languges ', function() {
    var greet = GreetmeFunction();

    greet.GreetLanguage("Ncumisa", 'Afrikaans');
      greet.GreetLanguage("Asanda", 'English');
        greet.GreetLanguage("Zee", 'IsiXhosa');

    assert.equal(3, greet.CountPeople());
  })
  it('should greet 6 people in different languges ', function() {
    var greet = GreetmeFunction();

    greet.GreetLanguage("Ncumisa", 'Afrikaans');
      greet.GreetLanguage("Asanda", 'English');
        greet.GreetLanguage("Zee", 'IsiXhosa');
        greet.GreetLanguage("Jackson", 'Afrikaans');
          greet.GreetLanguage("Jastine", 'English');
            greet.GreetLanguage("JAbu", 'IsiXhosa');

    assert.equal(6, greet.CountPeople());
  })
});
