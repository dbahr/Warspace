/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Ships/Ship.ts" />
/// <reference path="Map.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Warspace;
(function (Warspace) {
    var MapBoundary = (function (_super) {
        __extends(MapBoundary, _super);
        function MapBoundary(from, to) {
            var graphic = new eg.Graphics.Line2d(from.X, from.Y, to.X, to.Y, 1, MapBoundary.Color);
            _super.call(this, graphic.GetDrawBounds());
            this.Graphic = graphic;
            this.Graphic.LineWidth = MapBoundary.BoundaryWidth;
            // Left or right
            if (from.X - to.X === 0) {
                this._bounceMultiplier = new eg.Vector2d(-Warspace.Map.BARRIER_DEPRECATION, Warspace.Map.BARRIER_DEPRECATION);
            }
            else {
                this._bounceMultiplier = new eg.Vector2d(Warspace.Map.BARRIER_DEPRECATION, -Warspace.Map.BARRIER_DEPRECATION);
            }
        }
        MapBoundary.prototype.Collided = function (data) {
            if (data.With instanceof Warspace.Ship) {
                this.HandleShipCollision(data.With);
            }
            // TODO: Add bullet
        };
        MapBoundary.prototype.Dispose = function () {
            _super.prototype.Dispose.call(this);
            this.Graphic.Dispose();
        };
        MapBoundary.prototype.HandleShipCollision = function (ship) {
            var bounceMultiplier;
            ship.MovementController.StopMoving("Forward");
            ship.MovementController.StopMoving("Backward");
            ship.AnimationHandler.StopAllAnimations();
            this.RepositionShipInBounds(ship);
            // Reverse velocity, aka bounce
            ship.MovementController.Forces = ship.MovementController.Forces.Multiply(this._bounceMultiplier);
            ship.MovementController.Velocity = ship.MovementController.Velocity.Multiply(this._bounceMultiplier);
        };
        // Ugly
        MapBoundary.prototype.RepositionShipInBounds = function (ship) {
            // Re-position to be in-bounds
            if (ship.MovementController.Position.X - Warspace.Ship.SIZE.HalfWidth <= 1) {
                ship.MovementController.Position.X = Warspace.Ship.SIZE.HalfWidth + 3;
            }
            else if (ship.MovementController.Position.X + Warspace.Ship.SIZE.HalfWidth >= Warspace.Map.SIZE.Width - 1) {
                ship.MovementController.Position.X = Warspace.Map.SIZE.Width - Warspace.Ship.SIZE.HalfWidth - 3;
            }
            if (ship.MovementController.Position.Y - Warspace.Ship.SIZE.HalfHeight <= 1) {
                ship.MovementController.Position.Y = Warspace.Ship.SIZE.HalfHeight + 3;
            }
            else if (ship.MovementController.Position.Y + Warspace.Ship.SIZE.HalfHeight >= Warspace.Map.SIZE.Height - 1) {
                ship.MovementController.Position.Y = Warspace.Map.SIZE.Height - Warspace.Ship.SIZE.HalfHeight - 3;
            }
        };
        MapBoundary.Color = eg.Graphics.Color.FromHex("#3fa9f5");
        MapBoundary.BoundaryWidth = 5;
        return MapBoundary;
    }(eg.Collision.Collidable));
    Warspace.MapBoundary = MapBoundary;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=MapBoundary.js.map