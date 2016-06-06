/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
var Warspace;
(function (Warspace) {
    function StandardDeviation(arr) {
        var average = Average(arr), sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += Math.pow(arr[i] - average, 2);
        }
        return Math.sqrt(sum / (arr.length - 1));
    }
    Warspace.StandardDeviation = StandardDeviation;
    function Average(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
    Warspace.Average = Average;
    Warspace.delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();
    jQuery.fn.flash = function (color, duration) {
        this.stop(true);
        var current = this.css('backgroundColor');
        this.animate({ backgroundColor: 'rgb(' + color + ')' }, duration / 2)
            .animate({ backgroundColor: current }, duration / 2);
    };
})(Warspace || (Warspace = {}));
//# sourceMappingURL=UtilityFunctions.js.map