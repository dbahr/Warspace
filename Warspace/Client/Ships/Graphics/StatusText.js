/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var StatusText = (function (_super) {
        __extends(StatusText, _super);
        function StatusText(text, size, color, fadeDuration, reverseDirection) {
            var _this = this;
            if (fadeDuration === void 0) { fadeDuration = StatusText.DEFAULT_FADE_DURATION; }
            if (reverseDirection === void 0) { reverseDirection = false; }
            _super.call(this, 0, 0, text, color);
            var directionMultipler = reverseDirection ? -1 : 1;
            this.FontSettings.FontSize = size + "px";
            this.FontSettings.FontFamily = eg.Graphics.Assets.FontFamily.Verdana;
            this.FontSettings.FontWeight = "bold";
            this._movementTween = new eg.Tweening.Vector2dTween(this.Position, new eg.Vector2d(directionMultipler * eg.Particles.Range.RandomNumber(StatusText.MOVE_X_RANGE), directionMultipler * eg.Particles.Range.RandomNumber(StatusText.MOVE_Y_RANGE)), fadeDuration, eg.Tweening.Functions.Cubic.EaseOut);
            this._fadeTween = new eg.Tweening.NumberTween(100, 0, fadeDuration, eg.Tweening.Functions.Cubic.EaseOut);
            this._active = false;
            this._movementTween.OnChange.Bind(function (newPosition) {
                _this.Position = newPosition;
            });
            this._fadeTween.OnChange.Bind(function (fade) {
                _this.Opacity = fade / 100;
            });
            this._movementTween.OnComplete.Bind(function (movementTween) {
                _this.Dispose();
            });
            this._movementTween.Play();
            this._fadeTween.Play();
        }
        StatusText.prototype.Update = function (gameTime) {
            this._movementTween.Update(gameTime);
            this._fadeTween.Update(gameTime);
        };
        StatusText.prototype.Dispose = function () {
            if (!this._active) {
                this._active = true;
                this._movementTween.Dispose();
                this._fadeTween.Dispose();
                _super.prototype.Dispose.call(this);
            }
        };
        StatusText.MOVE_Y_RANGE = new eg.Particles.Range(-50, -200);
        StatusText.MOVE_X_RANGE = new eg.Particles.Range(-50, 50);
        StatusText.DEFAULT_FADE_DURATION = eg.TimeSpan.FromSeconds(1);
        return StatusText;
    }(eg.Graphics.Text2d));
    Warspace.StatusText = StatusText;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=StatusText.js.map