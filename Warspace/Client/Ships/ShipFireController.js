/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Server/ServerAdapter.ts" />
var Warspace;
(function (Warspace) {
    var ShipFireController = (function () {
        function ShipFireController(keyboard, mouse, onFire) {
            var autoFireHandle, firedAt = 0, singleFireMode = true, lastShot = 0;
            mouse.OnClick.Bind(function () {
                onFire("Fire");
            });
            keyboard.OnCommandDown("Z", function () {
                var timeSinceFired;
                firedAt = new Date().getTime();
                if (singleFireMode) {
                    timeSinceFired = firedAt - lastShot;
                    if (timeSinceFired > ShipFireController.MIN_FIRE_RATE.Milliseconds) {
                        lastShot = firedAt;
                        onFire("Fire");
                    }
                    autoFireHandle = setTimeout(function () {
                        singleFireMode = false;
                        onFire("StartFire");
                    }, ShipFireController.MIN_FIRE_RATE.Milliseconds);
                }
                else {
                    onFire("StartFire");
                }
            });
            keyboard.OnCommandUp("Z", function () {
                var timeFireReleased;
                clearTimeout(autoFireHandle);
                timeFireReleased = new Date().getTime();
                if (!singleFireMode) {
                    lastShot = timeFireReleased;
                    onFire("StopFire");
                }
                singleFireMode = timeFireReleased - firedAt < ShipFireController.MIN_FIRE_RATE.Milliseconds;
            });
        }
        return ShipFireController;
    }());
    Warspace.ShipFireController = ShipFireController;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ShipFireController.js.map