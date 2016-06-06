/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../../Common/Animation.ts" />
/// <reference path="../HealthPack.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var HealthPackGraphic = (function (_super) {
        __extends(HealthPackGraphic, _super);
        function HealthPackGraphic(position, contentManager) {
            _super.call(this, position, contentManager.GetImage("HealthPack"), HealthPackGraphic.FPS, Warspace.HealthPack.SIZE, HealthPackGraphic.FRAME_COUNT);
            this.Play(true);
        }
        HealthPackGraphic.FRAME_COUNT = 18;
        HealthPackGraphic.FPS = 18;
        return HealthPackGraphic;
    }(Warspace.Animation));
    Warspace.HealthPackGraphic = HealthPackGraphic;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=HealthPackGraphic.js.map