describe("Greetings in different languges", function() {

  it("should return Mhollo for IsiXhosa", function() {

    var Greet = GreetmeFunction();

    Greet.GreetLanguage("Aya", 'IsiXhosa');

    assert.equal('Mhollo, Aya', Greet.GreetedPerson());

  })
  it('should Greet Shaun in english', function() {
    var greet = GreetmeFunction();

    greet.GreetLanguage("Shaun", 'English');

    assert.equal('Hey, Shaun', greet.GreetedPerson());
  })

  it('should be able to Greet Jacob in Afrikaans', function() {
    var greet = GreetmeFunction();

    greet.GreetLanguage("Jacob", 'Afrikaans');

    assert.equal('Halo, Jacob', greet.GreetedPerson());
  })
    })
  describe("Count for how many people were greeted", function() {

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
            greet.GreetLanguage("Jabu", 'IsiXhosa');

    assert.equal(6, greet.CountPeople());
  })
});
