using System;
using System.Text;
using System.Web;
using System.Web.Security;
using Microsoft.Owin.Security;
using Newtonsoft.Json;
using Warspace.Authentication;

namespace Warspace
{
    public partial class _default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var state = Request.Cookies["Warspace.UserProfile"];

            if (state != null)
            {
                try
                {
                    string decoded = HttpUtility.UrlDecode(state.Value);
                    var rc = JsonConvert.DeserializeObject<RegisteredClient>(decoded);

                    if (rc.Identity == "Unknown")
                    {
                        rc.Identity = rc.DisplayName;
                        rc.RegistrationID = null;

                        Warspace.Objects.UserData userData = Warspace.DataAccess.UserStore.GetUser(rc.Identity);

                        if (null != userData)
                            rc.Photo = userData.UserProfilePicture;
                        else
                            rc.Photo = "/Images/Page/SignalRLogoIdea.png";
                    }
                    else
                    {
                        Byte[] encryptedIdentity = HttpServerUtility.UrlTokenDecode(rc.Identity);
                        Byte[] unprotectedIdentity = MachineKey.Unprotect(encryptedIdentity, "Warspace.Identity");
                        rc.Identity = Encoding.UTF8.GetString(unprotectedIdentity);
                    }

                    rc.DisplayName = System.Net.WebUtility.HtmlEncode(rc.DisplayName);

                    Game.Instance.RegistrationHandler.Register(rc);

                    WarspaceAuthenticationProvider.SetState(rc, Context.GetOwinContext().Response);

                    LoginScripts.Visible = false;
                    GameScripts.Visible = true;
                }
                catch (Exception ex)
                {
                    Warspace.ErrorLog.Instance.Log(ex, "Error occured on user login.");
                    LoginScripts.Visible = true;
                    GameScripts.Visible = false;
                }
            }
            else
            {
                //Warspace.ErrorLog.Instance.Log(null, "Cookie Value: " + state.Value);
                LoginScripts.Visible = true;
                GameScripts.Visible = false;
            }
        }
    }
}