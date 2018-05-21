describe("Greetings in different languges" ,function(){

      it("should return Mhollo for IsiXhosa", function(){

        var Greet = GreetmeFunction();

        Greet.GreetLanguage("Aya", 'IsiXhosa');

        assert.equal('Mhollo, Aya', Greet.GreetMe());

      })
      it('should Greet Shaun in english', function(){
        var greet = GreetmeFunction();

        greet.GreetLanguage("Shaun", 'English');

        assert.equal('Hey, Shaun', greet.GreetMe());
      })

      it('should be able to Greet Jacob in Afrikaans', function(){
        var greet = GreetmeFunction();

        greet.GreetLanguage("Jacob", 'Afrikaans');

        assert.equal('Halo, Jacob', greet.GreetMe());
      })

      it('should not be able to Greet Jacob in Afrikaans ', function(){
        var greet = GreetmeFunction();

        greet.GreetLanguage("Jacob", 'Afrikaans');

        assert.equal('Exe, Jacob', greet.GreetMe());
      })
    });
