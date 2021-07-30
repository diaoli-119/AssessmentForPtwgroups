using System;
using System.Data;
using Dapper;

namespace dataProcess.DataAccess
{
    public class SqlConnector : IDataConnection
    {
        private const string dbName = "BasicInfo";
        
        public BasicInfoModule CreateBasicInfo(BasicInfoModule biModule, string conStr)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(conStr))
            {
                var p = new DynamicParameters();
                p.Add("@Fullname", biModule.Fullname);
                p.Add("@PhoneNumber", biModule.PhoneNo);
                p.Add("@VerificationCode", biModule.VerificationCode);
                p.Add("@id", 0, dbType: DbType.Int32, direction: ParameterDirection.Output);

                try
                {
                    connection.Execute("dbo.Sp_BasicInfo_Insert", p, commandType: CommandType.StoredProcedure);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
                finally
                {
                    Console.WriteLine("Submit Successfully");
                }

                biModule.id = p.Get<int>("@id");
                return biModule;
            }
        }
    }
}
