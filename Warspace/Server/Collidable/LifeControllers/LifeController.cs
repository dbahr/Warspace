using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Warspace
{
    public class LifeController
    {
        public const double LEVEL_UP_LIFE_INCREASE = 1.07;

        public event DeathEventHandler OnDeath;

        private double _startLife = 0;

        public LifeController()
            : this(1)
        {            
        }

        public LifeController(double life)
        {
            _startLife = Math.Floor(life);
            MaxLife = _startLife;
            Health = MaxLife;
            Alive = true;
        }

        public Ship Host { get; set; }
        public double Health { get; protected set; }
        public double MaxLife { get; protected set; }
        public bool Alive { get; protected set; }

        public void Hurt(double life, Bullet bullet)
        {
            if (bullet.FiredBy != Host)
            {
                Health -= life;

                // Dead
                if (Health <= 0)
                {
                    Health = 0;
                    Alive = false;
                    OnDeath?.Invoke(Host, new DeathEventArgs(bullet));
                }
            }
        }

        public void Heal(double life)
        {
            Alive = true;
            Health = Math.Min(Health + life, MaxLife);
        }

        public void HealFull()
        {
            Alive = true;
            Health = MaxLife;
        }

        public void Reset()
        {
            Alive = true;
            MaxLife = _startLife;
            Health = MaxLife;
        }
    }
}