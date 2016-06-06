using System;
using System.Data;
using System.Data.SqlClient;
using System.Collections.Generic;

namespace Warspace.DataAccess
{
    public static class StatsStore
    {
        public static List<Warspace.Objects.UserData> GetTopPlayers()
        {
            List<Warspace.Objects.UserData> userDataList = new List<Objects.UserData>();

            using (var conn = new SqlConnection(Warspace.DataAccess.StaticData.ConnectionString))
            {
                using (var command = new SqlCommand("Stats_TopFivePlayers", conn)
                { CommandType = CommandType.StoredProcedure })
                {
                    conn.Open();
                    var reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        Warspace.Objects.UserData userData = new Objects.UserData();

                        userData.UserID = reader["UserId"].ToString();
                        userData.UserDisplayName = reader["UserDisplayName"].ToString();

                        var imageText = reader["UserProfilePicture"];

                        if (null == imageText)
                            imageText = "http://DBAHR-W02:9000/Images/Page/SignalRLogoIdea.png";

                        userData.UserProfilePicture = imageText.ToString();

                        userData.Kills = Convert.ToInt32(reader["Kills"]);
                        userData.Deaths = Convert.ToInt32(reader["Deaths"]);
                        userData.ShipStyle = Convert.ToInt32(reader["ShipStyle"]);
                        userData.PilotLevel = Convert.ToInt32(reader["PilotLevel"]);

                        userDataList.Add(userData);
                    }
                }
            }

            return userDataList;
        }
    }
}
