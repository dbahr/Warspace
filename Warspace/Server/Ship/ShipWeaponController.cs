using System;
namespace Warspace
{
    /// <summary>
    /// The ship weapon controller.
    /// </summary>
    public class ShipWeaponController
    {
        // Proportion of ships energy used to fire bullet
        public const double ENERGY_TO_FIRE = .25;
        // The ships energy will regenerate fully in ENERGY_RECHARGE_RATE milliseconds
        public const int ENERGY_RECHARGE_RATE = 2200;
        // At most fire once per MIN_FIRE_RATE milliseconds
        public const int MIN_FIRE_RATE = 942;
        // Lead the weapon by X pixels
        public const double BULLET_LEAD = 42;

        public const double DAMAGE_INCREASE_RATE = 0;

        private BulletManager _bulletManager;
        private Ship _me;

        private const double HALF_SHIP_WIDTH = Ship.WIDTH * .5;
        private const double HALF_SHIP_HEIGHT = Ship.HEIGHT * .5;

        private const double HALF_BULLET_WIDTH = Bullet.WIDTH * .5;
        private const double HALF_BULLET_HEIGHT = Bullet.HEIGHT * .5;

        private static readonly Vector2 BULLET_OFFSET = new Vector2(HALF_BULLET_WIDTH, HALF_BULLET_HEIGHT);

        public ShipWeaponController(Ship ship, BulletManager bm, int weaponFiringSpeedLevel, int bulletDamageLevel, int bulletRangeLevel)                      
        {
            _bulletManager = bm;
            _me = ship;
            Energy = 1;
            DamageModifier = 1 + (bulletDamageLevel / 10);
            LastFired = DateTime.UtcNow;
            AutoFire = false;
            FiringRate = MIN_FIRE_RATE;

            if (weaponFiringSpeedLevel > 1)
            {
                for (int i = 0; i < weaponFiringSpeedLevel; ++i)
                    if (_me.GetType() == typeof(Ship) && FiringRate > 50)
                        FiringRate -= 100;
                    else
                        break;
            }

        }

        public double DamageModifier { get; set; }
        public int FiringRate { get; set; }
        public DateTime LastFired { get; set; }
        public bool AutoFire { get; set; }
        public double Energy { get; private set; }

        /// <summary>
        /// Create's a bullet in the direction of the ship
        /// </summary>
        /// <returns>Newly created bullet</returns>
        public bool Fire(DateTime now)
        {
            var timeSinceLastFired = (now - LastFired).TotalMilliseconds;
            var newEnergy = Math.Min(Energy + timeSinceLastFired / ENERGY_RECHARGE_RATE, 1);
            if (timeSinceLastFired >= FiringRate && newEnergy > ENERGY_TO_FIRE)
            {
                var shipCenter = new Vector2(_me.MovementController.Position.X + HALF_SHIP_WIDTH, _me.MovementController.Position.Y + HALF_SHIP_HEIGHT);
                var shipDirection = new Vector2(_me.MovementController.Rotation);
                var startPosition = new Vector2((shipCenter + (BULLET_LEAD * shipDirection)) - BULLET_OFFSET);

                Bullet spawnedBullet = new Bullet(startPosition, shipDirection, _me, DamageModifier);
                _bulletManager.Add(spawnedBullet);

                LastFired = now;

                _me.Fired(spawnedBullet);

                Energy = newEnergy - ENERGY_TO_FIRE;
                return true;
            }
            return false;
        }

        /// <summary>
        /// Triggered on level
        /// </summary>
        public void LeveledUp(object sender, LevelUpEventArgs e)
        {
            //DamageModifier += DAMAGE_INCREASE_RATE;

            if (_me.GetType() == typeof(Ship) && FiringRate > 50)
                FiringRate -= 100;
        }

        public void Reset()
        {
            DamageModifier = 1;
        }

        public void Update(DateTime now)
        {
            if (AutoFire)
            {
                Fire(now);
            }
        }
    }
}