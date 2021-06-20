declare namespace RMApi {
  declare namespace Character {
    interface IResponse {
      id: number;
      name: string;
      status: string;
      species: string;
      gender: string;
      origin: {
        name: string;
        url: string;
      };
      location: {
        name: string;
        url: string;
      };
      image: string;
      episode: string[];
      url: string;
      created: string;
    }
  }

  declare namespace Characters {
    interface IInfo {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }

    interface IResponse {
      info: IInfo;
      results: Character.IResponse[];
    }
  }

  declare namespace Location {
    interface IResponse {
      id: number;
      name: string;
      type: string;
      dimension: string;
      residents: string[];
      url: string;
      created: string;
    }
  }

  declare namespace Episode {
    interface IResponse {
      id: number;
      name: string;
      air_date: string;
      episode: string;
      characters: string[];
      url: string;
      created: string;
    }
  }
}
