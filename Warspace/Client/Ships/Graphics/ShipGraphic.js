/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="ShipLifeGraphic.ts" />
/// <reference path="ShipDamageGraphic.ts" />
/// <reference path="ShipBodyGraphic.ts" />
/// <reference path="../Ship.ts" />
/// <reference path="../Levels/ShipLevelManager.ts" />
/// <reference path="ShipStatusTextGraphic.ts" />
/// <reference path="ShipNameGraphic.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var ShipGraphic = (function (_super) {
        __extends(ShipGraphic, _super);
        function ShipGraphic(name, userControlled, style, levelManager, lifeController, position, rotation, size, contentManager) {
            // The Graphic color is transparent because all graphics that represent a ship will be added as a child.
            _super.call(this, position.X, position.Y, size.Width, size.Height, eg.Graphics.Color.Transparent);
            this.Body = new Warspace.ShipBodyGraphic(style);
            this.RotateShip(rotation);
            this._damageGraphic = new Warspace.ShipDamageGraphic(lifeController, contentManager);
            this._statusGraphic = new Warspace.ShipStatusTextGraphic(levelManager, lifeController);
            this.AddChild(this.Body);
            this.AddChild(this._statusGraphic);
            this.Body.AddChild(this._damageGraphic);
            if (!userControlled) {
                this._lifeBar = new Warspace.ShipLifeGraphic(lifeController);
                this._nameGraphic = new Warspace.ShipNameGraphic(name);
                this.AddChild(this._lifeBar);
                this.AddChild(this._nameGraphic);
            }
        }
        ShipGraphic.prototype.Status = function (text, size, color, fadeDuration, reverseDirection) {
            this._statusGraphic.Status(text, size, color, fadeDuration, reverseDirection);
        };
        ShipGraphic.prototype.AddChildToShip = function (child) {
            this.Body.AddChild(child);
        };
        ShipGraphic.prototype.RotateShip = function (newRotation) {
            this.Body.Rotation = newRotation;
        };
        ShipGraphic.prototype.HideShip = function () {
            if (this._lifeBar) {
                this._lifeBar.Visible = false;
                this._nameGraphic.Visible = false;
            }
            this.Body.Visible = false;
        };
        ShipGraphic.prototype.Update = function (gameTime) {
            this._statusGraphic.Update(gameTime);
        };
        return ShipGraphic;
    }(eg.Graphics.Rectangle));
    Warspace.ShipGraphic = ShipGraphic;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ShipGraphic.js.map