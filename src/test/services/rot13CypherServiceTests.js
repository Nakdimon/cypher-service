var assert = require('chai').assert
var rot13CypherService = require('../../services/rot13CypherService')

var text = "hello"
var multiWordText = "hello world"
var uppercaseText = "HelLo"
var shift10 = 10

var cypheredTextDefaultShift = "uryyb"
var cypheredTextShift10 = "rovvy"
var cypheredMultiWordText = "uryyb jbeyq"
var cypheredUppercaseText = "UryYb"
var uppercaseU = "U"
var uppercaseY = "Y"
var blank = " "

describe("ROT13 cypher service tests: ", () => {
    describe("Check caesarCypher() function: ", () => { 
      it("Should return \"uryyb\" as cyphered result for text \"hello\"", () => {
        var result = rot13CypherService.rot13Cypher(text)
        assert.equal(result, cypheredTextDefaultShift)
      })
      it("Should return \"rovvy\" as cyphered result for text \"hello\"", () => {
        var result = rot13CypherService.rot13Cypher(text, shift10)
        assert.equal(result, cypheredTextShift10)
      })
      it("Should return \"uryyb jbeyq\" as cyphered result for text \"hello world\"", () => {
        var result = rot13CypherService.rot13Cypher(multiWordText)
        assert.equal(result, cypheredMultiWordText)
      })
      it("Should return a space char when text is a sentence.", () => {
          var result = rot13CypherService.rot13Cypher(multiWordText)
          assert.equal(result[5], blank)
      })
      it("Should return \"UryYb\" as cyphered result for text \"HelLo\"", () => {
        var result = rot13CypherService.rot13Cypher(uppercaseText)
        assert.equal(result, cypheredUppercaseText)
      })
      it("Should preseve uppercasing when present.", () => {
        var result = rot13CypherService.rot13Cypher(uppercaseText)
        assert.equal(result[0], uppercaseU)
        assert.equal(result[3], uppercaseY)
      })
    })        
})