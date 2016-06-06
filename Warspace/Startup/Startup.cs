using System;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute("Warspace", typeof(Warspace.Startup))]
namespace Warspace
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            GlobalHost.Configuration.DisconnectTimeout = TimeSpan.FromMinutes(60); // Disconnect after one hour
        }
    }
}