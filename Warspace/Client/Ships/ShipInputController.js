/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="IMoving.ts" />
/// <reference path="ShipFireController.ts" />
var Warspace;
(function (Warspace) {
    var ShipInputController = (function () {
        function ShipInputController(_keyboard, _mouse, _onMove, _onFire) {
            var _this = this;
            this._keyboard = _keyboard;
            this._mouse = _mouse;
            this._onMove = _onMove;
            this._onFire = _onFire;
            this._directions = {
                Forward: false,
                Backward: false,
                RotatingLeft: false,
                RotatingRight: false
            };
            this._lastBoostTap = new Date();
            // W-A-S-D Keys
            //this.BindKeys(["W"], "OnCommandDown", "Forward", true);
            //this.BindKeys(["D"], "OnCommandDown", "RotatingRight", true);
            //this.BindKeys(["S"], "OnCommandDown", "Backward", true);
            //this.BindKeys(["A"], "OnCommandDown", "RotatingLeft", true);
            //this.BindKeys(["W"], "OnCommandUp", "Forward", false);
            //this.BindKeys(["D"], "OnCommandUp", "RotatingRight", false);
            //this.BindKeys(["S"], "OnCommandUp", "Backward", false);
            //this.BindKeys(["A"], "OnCommandUp", "RotatingLeft", false);
            // Arrow Keys
            this.BindKeys(["UP"], "OnCommandDown", "Forward", true);
            this.BindKeys(["RIGHT"], "OnCommandDown", "RotatingRight", true);
            this.BindKeys(["DOWN"], "OnCommandDown", "Backward", true);
            this.BindKeys(["LEFT"], "OnCommandDown", "RotatingLeft", true);
            this.BindKeys(["UP"], "OnCommandUp", "Forward", false);
            this.BindKeys(["RIGHT"], "OnCommandUp", "RotatingRight", false);
            this.BindKeys(["DOWN"], "OnCommandUp", "Backward", false);
            this.BindKeys(["LEFT"], "OnCommandUp", "RotatingLeft", false);
            //this._keyboard.OnCommandUp("W", () => {
            //    var now = new Date();
            //    if (eg.TimeSpan.DateSpan(this._lastBoostTap, now).Milliseconds <= ShipInputController.DOUBLE_TAP_AFTER.Milliseconds) {
            //        this._onMove("Boost", true);
            //    } else { // no double tap
            //        this._lastBoostTap = now;
            //    }
            //});
            this._keyboard.OnCommandUp("UP", function () {
                var now = new Date();
                if (eg.TimeSpan.DateSpan(_this._lastBoostTap, now).Milliseconds <= ShipInputController.DOUBLE_TAP_AFTER.Milliseconds) {
                    _this._onMove("Boost", true);
                }
                else {
                    _this._lastBoostTap = now;
                }
            });
            this._fireController = new Warspace.ShipFireController(this._keyboard, this._mouse, this._onFire);
        }
        ShipInputController.prototype.BindKeys = function (keyList, bindingAction, direction, startMoving) {
            var _this = this;
            for (var i = 0; i < keyList.length; ++i) {
                this._keyboard[bindingAction](keyList[i], function () {
                    if (_this._directions[direction] !== startMoving) {
                        _this._directions[direction] = startMoving;
                        _this._onMove(direction, startMoving);
                    }
                });
            }
        };
        ShipInputController.DOUBLE_TAP_AFTER = eg.TimeSpan.FromMilliseconds(350);
        return ShipInputController;
    }());
    Warspace.ShipInputController = ShipInputController;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ShipInputController.js.map