using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Warspace
{
    public class RuntimeConfiguration
    {
        public RuntimeConfiguration()
        {
            MaxServerUsers = 2000;
        }

        public int MaxServerUsers { get; set; }
    }
}