/// <reference path="../../Scripts/endgate-0.2.1.d.ts" />
/// <reference path="../Ships/Ship.ts" />
/// <reference path="../Ships/ShipFireController.ts" />
/// <reference path="../Ships/ShipMovementController.ts" />
/// <reference path="../Server/IConfigurationDefinitions.ts" />
/// <reference path="../Ships/Abilities/Boost.ts" />
/// <reference path="../User/UserShipManager.ts" />
/// <reference path="../User/LatencyResolver.ts" />
/// <reference path="../Bullets/Bullet.ts" />
/// <reference path="../Ships/ShipLifeController.ts" />
/// <reference path="../HUD/LeaderboardManager.ts" />
/// <reference path="../HUD/DeathScreen.ts" />
/// <reference path="../GameScreen.ts" />
/// <reference path="../Powerups/HealthPack.ts" />
/// <reference path="../Game.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
var Warspace;
(function (Warspace) {
    var ConfigurationManager = (function () {
        function ConfigurationManager(configuration) {
            // Update the prototypes from the config
            Warspace.Ship.SIZE = new eg.Size2d(configuration.shipConfig.WIDTH, configuration.shipConfig.HEIGHT);
            Warspace.Ship.DAMAGE_INCREASE_RATE = configuration.shipConfig.DAMAGE_INCREASE_RATE;
            Warspace.ShipFireController.MIN_FIRE_RATE = eg.TimeSpan.FromMilliseconds(configuration.shipConfig.MIN_FIRE_RATE);
            Warspace.ShipMovementController.DRAG_AREA = configuration.shipMovementControllerConfig.DRAG_AREA;
            Warspace.ShipMovementController.DRAG_COEFFICIENT = configuration.shipMovementControllerConfig.DRAG_COEFFICIENT;
            Warspace.ShipMovementController.ENGINE_POWER = configuration.shipMovementControllerConfig.ENGINE_POWER;
            Warspace.ShipMovementController.MASS = configuration.shipMovementControllerConfig.MASS;
            Warspace.ShipMovementController.ROTATE_SPEED = configuration.shipMovementControllerConfig.ROTATE_SPEED * .0174532925; // Convert to radians
            Warspace.ShipLifeController.START_LIFE = configuration.shipConfig.START_LIFE;
            Warspace.Boost.DURATION = eg.TimeSpan.FromMilliseconds(configuration.abilityConfig.BOOST_DURATION);
            Warspace.Boost.SPEED_INCREASE = configuration.abilityConfig.BOOST_SPEED_INCREASE;
            Warspace.Map.SIZE = new eg.Size2d(configuration.mapConfig.WIDTH, configuration.mapConfig.HEIGHT);
            Warspace.Map.BARRIER_DEPRECATION = configuration.mapConfig.BARRIER_DEPRECATION;
            Warspace.GameScreen.MAX_SCREEN_HEIGHT = configuration.screenConfig.MAX_SCREEN_HEIGHT;
            Warspace.GameScreen.MAX_SCREEN_WIDTH = configuration.screenConfig.MAX_SCREEN_WIDTH;
            Warspace.GameScreen.MIN_SCREEN_HEIGHT = configuration.screenConfig.MIN_SCREEN_HEIGHT;
            Warspace.GameScreen.MIN_SCREEN_WIDTH = configuration.screenConfig.MIN_SCREEN_WIDTH;
            Warspace.GameScreen.SCREEN_BUFFER_AREA = configuration.screenConfig.SCREEN_BUFFER_AREA;
            Warspace.Bullet.BULLET_DIE_AFTER = eg.TimeSpan.FromMilliseconds(configuration.gameConfig.BULLET_DIE_AFTER);
            Warspace.Bullet.SIZE = new eg.Size2d(configuration.bulletConfig.WIDTH, configuration.bulletConfig.HEIGHT);
            Warspace.HealthPack.SIZE = new eg.Size2d(configuration.healthPackConfig.WIDTH, configuration.healthPackConfig.HEIGHT);
            Warspace.HealthPack.LIFE_SPAN = eg.TimeSpan.FromMilliseconds(configuration.healthPackConfig.LIFE_SPAN);
            Warspace.LeaderboardManager.LEADERBOARD_SIZE = configuration.leaderboardConfig.LEADERBOARD_SIZE;
            Warspace.DeathScreen.RESPAWN_TIMER = eg.TimeSpan.FromSeconds(configuration.gameConfig.RESPAWN_TIMER);
            $.extend(this, configuration);
            Warspace.LatencyResolver.REQUEST_PING_EVERY = configuration.gameConfig.REQUEST_PING_EVERY;
        }
        return ConfigurationManager;
    }());
    Warspace.ConfigurationManager = ConfigurationManager;
})(Warspace || (Warspace = {}));
//# sourceMappingURL=ConfigurationManager.js.map