/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Ships/ShipLifeController.ts" />
/// <reference path="../Ships/Ship.ts" />
var Warspace;
(function (Warspace) {
    var HealthMonitor = (function () {
        function HealthMonitor() {
            this._maxHealth = Warspace.ShipLifeController.START_LIFE;
            this._currentHealthBar = $("#Health");
            this._currentHealthHeart = $("#HealthHeart");
            this._whiteHeartIndicator = $("#WhiteHealthHeart");
            this._healthHolder = $("#HealthHolder");
            this._healthText = $("#HealthText");
            this._gameWrapper = $("#gameWrapper");
            this._whiteHeartVisible = true;
            this._lastHealth = 0;
            this._halfHeartWidth = .5 * this._currentHealthHeart.width();
        }
        HealthMonitor.prototype.OnScreenResize = function () {
            this._lastHealth = -1;
        };
        HealthMonitor.prototype.Update = function (ship) {
            if (ship.LifeController.Health !== this._lastHealth) {
                this._maxHealth = ship.LifeController.MaxHealth;
                // If we're taking damage
                if (ship.LifeController.Health < this._lastHealth) {
                    if (ship.LifeController.Health <= 0) {
                        this._whiteHeartIndicator.fadeOut(HealthMonitor.ANIMATE_SPEED);
                        this._whiteHeartVisible = false;
                    }
                }
                else {
                    if (!this._whiteHeartVisible) {
                        this._whiteHeartVisible = true;
                        this._whiteHeartIndicator.fadeIn(HealthMonitor.ANIMATE_SPEED);
                    }
                }
                this._lastHealth = ship.LifeController.Health;
                this._healthText[0].innerHTML = this._lastHealth + "/" + this._maxHealth;
                this._currentHealthBar.stop(true);
                this._currentHealthHeart.stop(true);
                var lifePercentage = ship.LifeController.HealthPercent, holderWidth = this._healthHolder.width(), heartLeft = Math.min(Math.max((holderWidth * lifePercentage) - this._halfHeartWidth, 0), holderWidth - 2 * this._halfHeartWidth), barColor;
                this._currentHealthHeart.removeClass("good hurt bad");
                if (lifePercentage <= Warspace.ShipLifeController.BAD_THRESHOLD) {
                    this._currentHealthHeart.addClass("bad");
                    barColor = Warspace.ShipLifeController.BAD_COLOR;
                }
                else if (lifePercentage <= Warspace.ShipLifeController.HURT_THRESHOLD) {
                    this._currentHealthHeart.addClass("hurt");
                    barColor = Warspace.ShipLifeController.HURT_COLOR;
                }
                else {
                    this._currentHealthHeart.addClass("good");
                    barColor = Warspace.ShipLifeController.GOOD_COLOR;
                }
                this._currentHealthHeart.animate({ left: heartLeft }, HealthMonitor.ANIMATE_SPEED, "easeOutExpo");
                this._currentHealthBar.animate({ width: (lifePercentage * 100) + '%', backgroundColor: barColor }, HealthMonitor.ANIMATE_SPEED, "easeOutExpo");
            }
        };
        HealthMonitor.ANIMATE_SPEED = 500;
        return HealthMonitor;
    }());
    Warspace.HealthMonitor = HealthMonitor;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=HealthMonitor.js.map