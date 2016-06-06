/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../ShipMovementController.ts" />
/// <reference path="Ability.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var MovementAbility = (function (_super) {
        __extends(MovementAbility, _super);
        function MovementAbility(name, MovementController) {
            _super.call(this, name);
            this.MovementController = MovementController;
            this._initialPower = MovementController.Power;
        }
        MovementAbility.prototype.IncreaseSpeedBy = function (amount) {
            this.MovementController.Power += amount;
        };
        MovementAbility.prototype.MultiplySpeedBy = function (amount) {
            this.MovementController.Power *= amount;
        };
        MovementAbility.prototype.DecreaseSpeedBy = function (amount) {
            this.MovementController.Power -= amount;
        };
        MovementAbility.prototype.ResetSpeed = function () {
            this.MovementController.Power = this._initialPower;
        };
        return MovementAbility;
    }(Warspace.Ability));
    Warspace.MovementAbility = MovementAbility;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=MovementAbility.js.map