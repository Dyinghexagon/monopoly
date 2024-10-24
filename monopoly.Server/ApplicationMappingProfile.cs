using AutoMapper;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.Client;

namespace monopoly.Server
{
    public class ApplicationMappingProfile : Profile
    {
        public ApplicationMappingProfile()
        {
            CreateMap<Cell, CellModel>().ReverseMap();
            CreateMap<Player, PlayerModel>().ReverseMap();
            CreateMap<GameLobby, GameLobbyModel>().ReverseMap();
        }
    }
}
