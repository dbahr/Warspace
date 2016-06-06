/// <reference path="../../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../../../Space/MapBoundary.ts" />
/// <reference path="../../../Server/IPayloadDefinitions.ts" />
/// <reference path="../../Ship.ts" />
/// <reference path="../Boost.ts" />
/// <reference path="AbilityHandler.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var ShipAbilityHandler = (function (_super) {
        __extends(ShipAbilityHandler, _super);
        function ShipAbilityHandler(myShip) {
            var _this = this;
            var boost = new Warspace.Boost(myShip.MovementController);
            _super.call(this, [boost]);
            this.Boost = boost;
            myShip.OnCollision.Bind(function (data) {
                if (data.With instanceof Warspace.MapBoundary) {
                    _this.Boost.Deactivate();
                }
            });
        }
        ShipAbilityHandler.prototype.LoadPayload = function (payload) {
            if (payload.Boost && !this.Boost.Active) {
                this.Boost.Activate();
            }
            else if (!payload.Boost) {
                this.Boost.Deactivate();
            }
        };
        return ShipAbilityHandler;
    }(Warspace.AbilityHandler));
    Warspace.ShipAbilityHandler = ShipAbilityHandler;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ShipAbilityHandler.js.map