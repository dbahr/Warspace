/// <reference path="../../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Bullet.ts" />
/// <reference path="BulletExplosionAnimation.ts" />
var Warspace;
(function (Warspace) {
    var BulletAnimationHandler = (function () {
        function BulletAnimationHandler(_bullet, _contentManager) {
            var _this = this;
            this._bullet = _bullet;
            this._contentManager = _contentManager;
            this._explosionAnimation = new Warspace.BulletExplosionAnimation(this._contentManager);
            this._explosionAnimation.OnComplete.Bind(function () {
                _this._bullet.Dispose();
                _this._bullet.Graphic.Dispose();
            });
            this._bullet.OnExplosion.Bind(function () {
                _this._bullet.Graphic.HideBullet();
                _this._explosionAnimation.Play();
            });
            this._bullet.Graphic.AddChild(this._explosionAnimation);
        }
        BulletAnimationHandler.prototype.Update = function (gameTime) {
            this._explosionAnimation.Update(gameTime);
        };
        return BulletAnimationHandler;
    }());
    Warspace.BulletAnimationHandler = BulletAnimationHandler;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=BulletAnimationHandler.js.map