var assert = require('chai').assert
var caesarCypherService = require('../../services/caesarCypherService')

var text = "hello"
var multiWordText = "hello world"
var uppercaseText = "HelLo"
var shift10 = 10

var cypheredTextDefaultShift = "lipps"
var cypheredTextShift10 = "rovvy"
var cypheredMultiWordText = "rovvy gybvn"
var cypheredUppercaseTextShift10 = "RovVy"
var blank = " "
var uppercaseR = "R"
var uppercaseV = "V"

describe("Caesar cypher service tests: ", () => {
    describe("Check caesarCypher() function: ", () => {
        it("Should return \"lipps\" as cyphered result for text \"hello\"", () => {
            var result = caesarCypherService.caesarCypher(text)
            assert.equal(result, cypheredTextDefaultShift)
        })
        it("Should return \"rovvy\" as cyphered result for text \"hello\"", () => {
            var result = caesarCypherService.caesarCypher(text, shift10)
            assert.equal(result, cypheredTextShift10)
        })
        it("Should return \"rovvy gybvn\" as cyphered result for text \"hello world\"" , () => {
            var result = caesarCypherService.caesarCypher(multiWordText, shift10)
            assert.equal(result, cypheredMultiWordText)            
        })
        it("Should return a space char when text is a sentence.", () => {
            var result = caesarCypherService.caesarCypher(multiWordText)
            assert.equal(result[5], blank)
        })
        it("Should return \"RovVy\" as cyphered result for text \"HelLo\"", () => {
            var result = caesarCypherService.caesarCypher(uppercaseText, shift10)
            assert.equal(result, cypheredUppercaseTextShift10)
        })
        it("Should preseve uppercasing when present.", () => {
            var result = caesarCypherService.caesarCypher(uppercaseText, shift10)
            assert.equal(result[0], uppercaseR)
            assert.equal(result[3], uppercaseV)
        })
    })
})