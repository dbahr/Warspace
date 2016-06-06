/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../../Common/Animation.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var ShipDeathAnimation = (function (_super) {
        __extends(ShipDeathAnimation, _super);
        function ShipDeathAnimation(contentManager) {
            _super.call(this, eg.Vector2d.Zero, contentManager.GetImage("ShipExplosion"), ShipDeathAnimation.FPS, ShipDeathAnimation.FRAME_SIZE, ShipDeathAnimation.FRAME_COUNT);
            this.Rotation = (Math.random() * (Math.PI * 100)) / 100;
            this.Visible = false;
        }
        ShipDeathAnimation.prototype.Play = function () {
            this.Visible = true;
            _super.prototype.Play.call(this);
        };
        ShipDeathAnimation.FRAME_SIZE = new eg.Size2d(128, 128);
        ShipDeathAnimation.FRAME_COUNT = 30;
        ShipDeathAnimation.FPS = 25;
        return ShipDeathAnimation;
    }(Warspace.Animation));
    Warspace.ShipDeathAnimation = ShipDeathAnimation;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ShipDeathAnimation.js.map