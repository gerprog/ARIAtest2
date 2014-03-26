describe ("My Converter", function() {
    it("should convert celsius temperature to fahrenheit", function() {
        expect (tempConverter.convertFromCelsiusToFahrenheit(-17.2222)).toBe(1);
    });
    it("should be able to deal with strings", function() {
        expect (function() {tempConverter.convertFromCelsiusToFahrenheit("hello")}).toThrow(new Error("Not a number"));
    })
});
