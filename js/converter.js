var Converter = (function () {
    // private stuff goes here

    var converterValue = 2.2;

    return {

        convertFromImperialToMetric: function (weight) {
            var num = parseInt(weight);
            if (isNaN(num) == true){
                throw new Error ("Not a number");
            }
            num = num / converterValue;
            //	document.getElementById("demo").innerHTML = num;
            return Math.round(num);
        },
        convertFromMetricToImperial: function (weight) {
            return weight / converterValue
        }
    }
})();

