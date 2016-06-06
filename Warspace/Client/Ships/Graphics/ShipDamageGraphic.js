/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../ShipLifeController.ts" />
/// <reference path="../Ship.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var ShipDamageGraphic = (function (_super) {
        __extends(ShipDamageGraphic, _super);
        function ShipDamageGraphic(lifeController, contentManager) {
            var _this = this;
            var damageTier;
            _super.call(this, 0, 0, Warspace.Ship.SIZE.Width, Warspace.Ship.SIZE.Height, eg.Graphics.Color.Transparent);
            this._damageTiers = new Array();
            for (var i = 0; i < ShipDamageGraphic.DAMAGE_TIERS.length; i++) {
                damageTier = ShipDamageGraphic.DAMAGE_TIERS[i];
                this._damageTiers[damageTier] = new eg.Graphics.Sprite2d(0, 0, contentManager.GetImage("ShipDamage" + damageTier));
                this._damageTiers[damageTier].ZIndex = i;
                this._damageTiers[damageTier].Visible = false;
                this.AddChild(this._damageTiers[damageTier]);
            }
            lifeController.OnLifeChange.Bind(function (currentHealth, maxHealth) {
                var damageImage = Math.floor((1 - currentHealth / maxHealth) * 10) - 2, damageTier;
                if (damageImage > 0) {
                    for (var i = 0; i < ShipDamageGraphic.DAMAGE_TIERS.length; i++) {
                        damageTier = ShipDamageGraphic.DAMAGE_TIERS[i];
                        if (damageTier <= damageImage) {
                            _this._damageTiers[damageTier].Visible = true;
                        }
                        else {
                            _this._damageTiers[damageTier].Visible = false;
                        }
                    }
                }
                else {
                    for (var i = 0; i < ShipDamageGraphic.DAMAGE_TIERS.length; i++) {
                        damageTier = ShipDamageGraphic.DAMAGE_TIERS[i];
                        _this._damageTiers[damageTier].Visible = false;
                    }
                }
            });
        }
        ShipDamageGraphic.prototype.Update = function (gameTime) {
        };
        ShipDamageGraphic.DAMAGE_TIERS = [1, 3, 5, 7];
        return ShipDamageGraphic;
    }(eg.Graphics.Rectangle));
    Warspace.ShipDamageGraphic = ShipDamageGraphic;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ShipDamageGraphic.js.map