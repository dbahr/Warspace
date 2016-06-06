using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Warspace
{
    public class LevelCalculator
    {
        public const int MAX_EXPERIENCE_PER_LEVEL = 1492;   // hmm... that was a good year.
        public const double LEVEL_DIFFERENCE_MULTIPLIER = 1;
        public const int BASE_EXPERIENCE_GAIN = 150; // X experience per kill at level 1
        public const int MIN_EXPERIENCE = 42; // Cannot gain less than 42 experience per kill

        public int CalculateKillExperience(Ship Killer, Ship Killed)
        {
            var levelDiff = Killed.LevelManager.Level - Killer.LevelManager.Level;

            return Convert.ToInt32(Math.Max(Math.Round(BASE_EXPERIENCE_GAIN + BASE_EXPERIENCE_GAIN * levelDiff * LEVEL_DIFFERENCE_MULTIPLIER), MIN_EXPERIENCE));
        }

        public double NextLevelExperience(double level)
        {
            return Math.Round(Bias(0.53, (level + 1) / 100) * MAX_EXPERIENCE_PER_LEVEL);
        }

        private double Bias(double x, double y)
        {
            return y / ((1 / x - 2) * (1 - y) + 1);
        }
    }
}