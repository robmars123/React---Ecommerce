using Business.Services;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AllServices
    {
        //public static IServiceCollection AddConfig(
        //     this IServiceCollection services, IConfiguration config)
        //{
        //    services.Configure<PositionOptions>(
        //        config.GetSection(PositionOptions.Position));
        //    services.Configure<ColorOptions>(
        //        config.GetSection(ColorOptions.Color));

        //    return services;
        //}

        public static IServiceCollection AddMyDependencyGroup(
             this IServiceCollection services)
        {
            services.AddScoped<ProductService>();
            // Add here

            return services;
        }
    }
}