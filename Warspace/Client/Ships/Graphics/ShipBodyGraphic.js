/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Levels/ShipLevelManager.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var ShipBodyGraphic = (function (_super) {
        __extends(ShipBodyGraphic, _super);
        function ShipBodyGraphic(style) {
            var shipGraphic = ShipBodyGraphic._bodyGraphics[Math.min(style, 5)];
            _super.call(this, 0, 0, shipGraphic);
        }
        // Made as a static so we don't have to construct the ship bodies every time a new ship is created.
        ShipBodyGraphic.LoadShipBodies = function (contentManager) {
            ShipBodyGraphic._bodyGraphics = new Array();
            ShipBodyGraphic._bodyGraphics[0] = contentManager.GetImage("Drone");
            ShipBodyGraphic._bodyGraphics[1] = contentManager.GetImage("Fighter1");
            ShipBodyGraphic._bodyGraphics[2] = contentManager.GetImage("Fighter2");
            ShipBodyGraphic._bodyGraphics[3] = contentManager.GetImage("Fighter3");
            ShipBodyGraphic._bodyGraphics[4] = contentManager.GetImage("Fighter4");
            ShipBodyGraphic._bodyGraphics[5] = contentManager.GetImage("Fighter5");
        };
        return ShipBodyGraphic;
    }(eg.Graphics.Sprite2d));
    Warspace.ShipBodyGraphic = ShipBodyGraphic;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ShipBodyGraphic.js.map