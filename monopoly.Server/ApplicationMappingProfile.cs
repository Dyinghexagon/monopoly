using AutoMapper;
using monopoly.Server.Models.Backend;

namespace monopoly.Server
{
    public class ApplicationMappingProfile : Profile
    {
        public ApplicationMappingProfile()
        {
            CreateMap<CellBase, CellBaseModel>().ReverseMap();
            CreateMap<GameArea, GameAreaModel>().ReverseMap();
            CreateMap<Player, PlayerModel>().ReverseMap();
            CreateMap<GameLobby, GameLobbyModel>().ReverseMap();
        }
    }
}
