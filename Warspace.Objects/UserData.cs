using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Warspace.Objects
{
    public class UserData
    {
        public string UserID { get; set; }
        public string UserDisplayName { get; set; }
        public string UserProfilePicture { get; set; }
        public int Kills { get; set; }
        public int Deaths { get; set; }
        public int ShipStyle { get; set; }
        public int PilotLevel { get; set; }
    }
}
