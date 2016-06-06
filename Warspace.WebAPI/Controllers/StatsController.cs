using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using Warspace.DataAccess;
using Warspace.Objects;

namespace Warspace.WebAPI.Controllers
{
    [EnableCors(origins: "http://DBAHR-W02:80", headers: "*", methods: "*")]
    public class StatsController : ApiController
    {
        [HttpGet]
        [Route("Stats/TopPlayers")]
        public IEnumerable<UserData> GetTopPlayers()
        {
            return StatsStore.GetTopPlayers();
        }
    }
}
