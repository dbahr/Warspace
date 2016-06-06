using System;
using System.Web;

namespace Warspace
{
    public partial class Login : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public string ComputerName
        {
            get
            {
                string fullname = System.Net.Dns.GetHostEntry(HttpContext.Current.Request.UserHostAddress).HostName.ToUpper();
                int hypenIndex = fullname.IndexOf('-');
                int dotIndex = fullname.IndexOf('.');

                if (dotIndex > 0)
                {
                    if (hypenIndex > 0)
                        return fullname.Substring(0, hypenIndex);
                    else
                        return fullname.Substring(0, dotIndex);
                }                    
                else
                    return fullname;
            }
        }
    }
}