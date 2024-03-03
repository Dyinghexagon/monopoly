using AutoMapper;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.CLient;

namespace monopoly.Server
{
    public class ApplicationMappingProfile : Profile
    {
        public ApplicationMappingProfile()
        {
            CreateMap<User, UserModel>().ReverseMap();
        }
    }
}
