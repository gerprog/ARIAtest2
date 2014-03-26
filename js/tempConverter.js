var tempConverter = (function () {
    // private stuff goes here

    var converterValue = -17.2222;

    return {

        convertFromCelsiusToFahrenheit: function (temperature) {
            var num = parseInt(temperature);
            if (isNaN(num) == true){
                throw new Error ("Not a number");
            }
            num = num / converterValue;
            //	document.getElementById("demo").innerHTML = num;
            return Math.round(num);
        },
        convertFromMetricToImperial: function (temperature) {
            return temperature * converterValue
        }
    }
})();

