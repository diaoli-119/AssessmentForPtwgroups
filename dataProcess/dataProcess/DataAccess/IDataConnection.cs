
namespace dataProcess.DataAccess
{
    public interface IDataConnection
    {
        BasicInfoModule CreateBasicInfo(BasicInfoModule biModule, string conStr);
    }
}
