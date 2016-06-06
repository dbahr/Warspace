using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Warspace.DataAccess
{
    public static class UserStore
    {
        public static async void CreateUserAsync(string UserId)
        {
            await Task.Run(() =>
            {
                using (var conn = new SqlConnection(Warspace.DataAccess.StaticData.ConnectionString))
                {
                    using (var command = new SqlCommand("User_Create", conn)
                    { CommandType = CommandType.StoredProcedure })
                    {
                        command.Parameters.Add("@Id", SqlDbType.VarChar).Value = UserId;

                        conn.Open();
                        command.ExecuteNonQuery();
                    }
                }
            });
        }

        public static Warspace.Objects.UserData GetUser(string UserId)
        {
            Warspace.Objects.UserData userData = null;

            using (var conn = new SqlConnection(Warspace.DataAccess.StaticData.ConnectionString))
            {
                using (var command = new SqlCommand("User_Get", conn)
                { CommandType = CommandType.StoredProcedure })
                {
                    command.Parameters.Add("@Id", SqlDbType.VarChar).Value = UserId;

                    conn.Open();
                    var reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        userData = new Objects.UserData();

                        userData.UserID = UserId;
                        userData.UserDisplayName = reader["UserDisplayName"].ToString();

                        var imageText = reader["UserProfilePicture"];

                        if (null == imageText)
                            imageText = "/Images/Page/SignalRLogoIdea.png";

                        userData.UserProfilePicture = imageText.ToString();

                        userData.ShipStyle = Convert.ToInt32(reader["ShipStyle"]);
                        userData.PilotLevel = Convert.ToInt32(reader["PilotLevel"]);
                        userData.Kills = Convert.ToInt32(reader["Kills"]);
                        userData.Deaths = Convert.ToInt32(reader["Deaths"]);
                    }
                }
            }

            return userData;
        }

        public static async void IncrementKillCountAsync(string UserId)
        {
            await Task.Run(() =>
            {
                using (var conn = new SqlConnection(Warspace.DataAccess.StaticData.ConnectionString))
                {
                    using (var command = new SqlCommand("User_IncrementKillCount", conn)
                    { CommandType = CommandType.StoredProcedure })
                    {
                        command.Parameters.Add("@Id", SqlDbType.VarChar).Value = UserId;

                        conn.Open();
                        command.ExecuteNonQuery();
                    }
                }
            });
        }

        public static async void IncrementDeathCountAsync(string UserId)
        {
            await Task.Run(() =>
            {
                using (var conn = new SqlConnection(Warspace.DataAccess.StaticData.ConnectionString))
                {
                    using (var command = new SqlCommand("User_IncrementDeathCount", conn)
                    { CommandType = CommandType.StoredProcedure })
                    {
                        command.Parameters.Add("@Id", SqlDbType.VarChar).Value = UserId;

                        conn.Open();
                        command.ExecuteNonQuery();
                    }
                }
            });
        }

        public static async void IncrementPilotLevelAsync(string UserId)
        {
            await Task.Run(() =>
            {
                using (var conn = new SqlConnection(Warspace.DataAccess.StaticData.ConnectionString))
                {
                    using (var command = new SqlCommand("User_IncrementPilotLevel", conn)
                    { CommandType = CommandType.StoredProcedure })
                    {
                        command.Parameters.Add("@Id", SqlDbType.VarChar).Value = UserId;                        

                        conn.Open();
                        command.ExecuteNonQuery();
                    }
                }
            });
        }

        public static async void DecrementPilotLevelAsync(string UserId)
        {
            await Task.Run(() =>
            {
                using (var conn = new SqlConnection(Warspace.DataAccess.StaticData.ConnectionString))
                {
                    using (var command = new SqlCommand("User_DecrementPilotLevel", conn)
                    { CommandType = CommandType.StoredProcedure })
                    {
                        command.Parameters.Add("@Id", SqlDbType.VarChar).Value = UserId;

                        conn.Open();
                        command.ExecuteNonQuery();
                    }
                }
            });
        }
    }
}
