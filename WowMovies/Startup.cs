using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WowMovies.Startup))]
namespace WowMovies
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
