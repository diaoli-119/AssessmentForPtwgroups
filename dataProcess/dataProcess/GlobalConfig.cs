using System;
using dataProcess.DataAccess;

namespace dataProcess
{
    public class GlobalConfig
    {
        public static IDataConnection Connection { get; private set; }
        public static void InitializeConnections()
        {
            try
            {
                SqlConnector sql = new SqlConnector();
                Connection = sql;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                Console.WriteLine("Connected to SqlServer Successfully!");
            }
        }
    }
}
