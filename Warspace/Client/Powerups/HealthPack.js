/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
/// <reference path="Powerup.ts" />
/// <reference path="Graphics/HealthPackGraphic.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var HealthPack = (function (_super) {
        __extends(HealthPack, _super);
        function HealthPack(payload, contentManager) {
            _super.call(this, payload, new Warspace.HealthPackGraphic(payload.MovementController.Position, contentManager));
            this._spawnedAt = new Date();
        }
        HealthPack.prototype.Update = function (gameTime) {
            if (eg.TimeSpan.DateSpan(this._spawnedAt, gameTime.Now).Milliseconds >= HealthPack.LIFE_SPAN.Milliseconds) {
                this.Destroy();
                return;
            }
            this.Graphic.Update(gameTime);
        };
        HealthPack.SIZE = new eg.Size2d(50);
        HealthPack.LIFE_SPAN = eg.TimeSpan.FromSeconds(6);
        return HealthPack;
    }(Warspace.Powerup));
    Warspace.HealthPack = HealthPack;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=HealthPack.js.map