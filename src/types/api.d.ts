// Namespaces are not compilable.
// Do not import this file. Or import external dependencies.
// Use like so - const intro: LickApi.IIntro = {...};

/* eslint-disable */
declare namespace LickApi {
  interface ICharacterCore {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    avatar: string;
  }

  interface ICharacter extends ICharacterCore {
    location: ILocation;
    episodes: IEpisode[];
    origin: string;
    totalEpisodeCount: number;
  }

  interface ILocation {
    id: number;
    name: string;
    type: string;
    noOfResidents: number;
    dimension: string;
  }

  interface IEpisode {
    id: number;
    name: string;
    airDate: string;
    noOfCharacters: number;
    episode: string;
  }

  interface ICharacterCoreResponse {
    status: string;
    data: ICharacterCore[];
  }

  interface ICharacterResponse {
    status: string;
    data: ICharacter;
  }
}
