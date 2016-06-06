/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="IMoving.ts" />
/// <reference path="ShipFireController.ts" />

module Warspace {

    export class ShipInputController {
        public static DOUBLE_TAP_AFTER: eg.TimeSpan = eg.TimeSpan.FromMilliseconds(350);

        private _directions: IMoving;
        private _lastBoostTap: Date;
        private _fireController: ShipFireController;

        constructor(private _keyboard: eg.Input.KeyboardHandler, private _mouse: eg.Input.MouseHandler, private _onMove: (direction: string, startMoving: boolean) => void, private _onFire: (fireMethod: string) => void) {
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

            this._keyboard.OnCommandUp("UP", () => {
                var now = new Date();

                if (eg.TimeSpan.DateSpan(this._lastBoostTap, now).Milliseconds <= ShipInputController.DOUBLE_TAP_AFTER.Milliseconds) {
                    this._onMove("Boost", true);
                } else { // no double tap
                    this._lastBoostTap = now;
                }
            });

            this._fireController = new ShipFireController(this._keyboard, this._mouse, this._onFire);
        }

        private BindKeys(keyList: string[], bindingAction: string, direction: string, startMoving: boolean): void {
            for (var i = 0; i < keyList.length; ++i) {
                this._keyboard[bindingAction](keyList[i], () => {
                    if (this._directions[direction] !== startMoving) {
                        this._directions[direction] = startMoving;
                        this._onMove(direction, startMoving);
                    }
                });
            }
        }
    }

}