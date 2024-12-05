const {add} = require('./stringCalculator');

describe('stringCallculator',() =>{
    
    test('should return 0 if string is empty', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number if only one number is provided', () => {
        expect(add("3")).toBe(3);
    });

    test('should return error when negative number is provided', () => {
        expect(() => add("1,-2,-3,7")).toThrow("Negative numbers are not allowed: -2,-3");
    });

    test('should return sum of two numbers - comma separated', () => {
        expect(add("2,3")).toBe(5);
    });

    test('should handle an unknown amount of numbers', () => {
        expect(add("1,2,3,4,5,6")).toBe(21);
    });

    test('should handle new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should provide support for different delimiters - specified at begining of input', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('if numbers greater than 1000, ignore them', () => {
        expect(add("2,1001")).toBe(2);
    })

    test('should handle a custom delimiter of any length', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test('should handle multiple single-character delimiters', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test('should handle multiple multi-character delimiters', () => {
        expect(add("//[***][%%]\n1***2%%3")).toBe(6);
    });
})