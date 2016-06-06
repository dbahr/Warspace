/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var BulletGraphic = (function (_super) {
        __extends(BulletGraphic, _super);
        function BulletGraphic(position, size, contentManager) {
            // The Graphic color is transparent because all graphics that represent a ship will be added as a child.
            _super.call(this, position.X, position.Y, size.Width, size.Height, eg.Graphics.Color.Transparent);
            this._bulletBody = new eg.Graphics.Sprite2d(0, 0, contentManager.GetImage("Bullet"));
            this.AddChild(this._bulletBody);
        }
        BulletGraphic.prototype.HideBullet = function () {
            this._bulletBody.Visible = false;
        };
        return BulletGraphic;
    }(eg.Graphics.Rectangle));
    Warspace.BulletGraphic = BulletGraphic;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=BulletGraphic.js.map