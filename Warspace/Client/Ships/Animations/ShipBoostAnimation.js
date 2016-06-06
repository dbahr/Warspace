/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Ship.ts" />
/// <reference path="../../Common/Animation.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var ShipBoostAnimation = (function (_super) {
        __extends(ShipBoostAnimation, _super);
        function ShipBoostAnimation(contentManager) {
            _super.call(this, new eg.Vector2d(-Warspace.Ship.SIZE.HalfWidth - ShipBoostAnimation.FRAME_SIZE.HalfWidth, -2), contentManager.GetImage("Boost"), ShipBoostAnimation.FPS, ShipBoostAnimation.FRAME_SIZE, ShipBoostAnimation.FRAME_COUNT);
            this.Visible = false;
        }
        ShipBoostAnimation.prototype.Play = function () {
            this.Visible = true;
            _super.prototype.Play.call(this, true);
        };
        ShipBoostAnimation.prototype.Stop = function () {
            this.Visible = false;
            _super.prototype.Stop.call(this);
        };
        ShipBoostAnimation.FRAME_SIZE = new eg.Size2d(102, 50);
        ShipBoostAnimation.FRAME_COUNT = 10;
        ShipBoostAnimation.FPS = 12;
        return ShipBoostAnimation;
    }(Warspace.Animation));
    Warspace.ShipBoostAnimation = ShipBoostAnimation;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ShipBoostAnimation.js.map