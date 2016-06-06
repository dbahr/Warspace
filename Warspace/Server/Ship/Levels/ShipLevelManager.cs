using System;

namespace Warspace
{
    public class ShipLevelManager
    {
        public const double EXP_REDUCTION_MODIFIER = .9;
        private Ship _me;
        private LevelCalculator _levelCalculator;

        public event LevelUpEventHandler OnLevel;

        public ShipLevelManager(Ship me)
        {
            Level = 1;
            Experience = 0;
            _me = me;
            _levelCalculator = new LevelCalculator();
            ExperienceToNextLevel = Convert.ToInt32(_levelCalculator.NextLevelExperience(Level));

            _me.OnKill += DroneKilled;
            _me.OnDeath += DroneDied;

            OnLevel += _me.LifeController.LeveledUp;
            OnLevel += _me.WeaponController.LeveledUp;
        }

        public ShipLevelManager(Ship me, int level)
        {
            Level = level;
            Experience = 0;
            _me = me;
            _levelCalculator = new LevelCalculator();
            ExperienceToNextLevel = Convert.ToInt32(_levelCalculator.NextLevelExperience(Level));

            _me.OnKill += PlayerKilled;
            _me.OnDeath += PlayerDied;

            OnLevel += _me.LifeController.LeveledUp;
            OnLevel += _me.WeaponController.LeveledUp;
        }

        public int Level { get; private set; }
        public long Experience { get; private set; }
        public int ExperienceToNextLevel { get; private set; }

        public void StartupConfiguration(int experience, int level)
        {
            Level = level;
            Experience = experience;
            ExperienceToNextLevel = Convert.ToInt32(_levelCalculator.NextLevelExperience(Level));
        }

        public void DirectHitExperience()
        {
            Experience += 20;
        }

        public void PlayerKilled(object sender, KillEventArgs e)
        {
            // Do not gain experience from killing yourself
            if (_me != e.Killed as Ship)
            {
                int exp = _levelCalculator.CalculateKillExperience(_me, e.Killed as Ship);
                Experience += exp;
                Warspace.DataAccess.UserStore.IncrementKillCountAsync(_me.Host.RegistrationTicket.Identity);

                // Need to level
                if (Experience >= ExperienceToNextLevel)
                {
                    Experience = 0; // Experience - ExperienceToNextLevel;
                    ExperienceToNextLevel = Convert.ToInt32(_levelCalculator.NextLevelExperience(++Level));

                    if (OnLevel != null)
                    {
                        OnLevel(_me, new LevelUpEventArgs(Level));
                        Warspace.DataAccess.UserStore.IncrementPilotLevelAsync(_me.Host.RegistrationTicket.Identity);
                    }
                }
            }
        }

        public void PlayerDied(object sender, DeathEventArgs e)
        {
            int exp = Convert.ToInt32(_levelCalculator.CalculateKillExperience((e.KilledBy as Bullet).FiredBy, _me) * EXP_REDUCTION_MODIFIER);
            Experience = Math.Max(Experience - exp, 0);
            Warspace.DataAccess.UserStore.IncrementDeathCountAsync(_me.Host.RegistrationTicket.Identity);

            if (Level > 1)
            {
                Warspace.DataAccess.UserStore.DecrementPilotLevelAsync(_me.Host.RegistrationTicket.Identity);
                ExperienceToNextLevel = Convert.ToInt32(_levelCalculator.NextLevelExperience(--Level));
            }
        }

        public void DroneKilled(object sender, KillEventArgs e)
        {
            // Do not gain experience from killing yourself
            if (_me != e.Killed as Ship)
            {
                int exp = _levelCalculator.CalculateKillExperience(_me, e.Killed as Ship);
                Experience += exp;
                Warspace.DataAccess.UserStore.IncrementKillCountAsync(_me.Host.RegistrationTicket.Identity);

                // Need to level
                if (Experience >= ExperienceToNextLevel)
                {
                    Experience = 0; // Experience - ExperienceToNextLevel;
                    ExperienceToNextLevel = Convert.ToInt32(_levelCalculator.NextLevelExperience(++Level));

                    OnLevel?.Invoke(_me, new LevelUpEventArgs(Level));
                }
            }
        }

        public void DroneDied(object sender, DeathEventArgs e)
        {
            int exp = Convert.ToInt32(_levelCalculator.CalculateKillExperience((e.KilledBy as Bullet).FiredBy, _me) * EXP_REDUCTION_MODIFIER);
            Experience = Math.Max(Experience - exp, 0);

            if (Level > 1)
                ExperienceToNextLevel = Convert.ToInt32(_levelCalculator.NextLevelExperience(--Level));
        }

        public void Reset()
        {
            Level = 1;
            Experience = 0;
            ExperienceToNextLevel = Convert.ToInt32(_levelCalculator.NextLevelExperience(1));
        }
    }
}