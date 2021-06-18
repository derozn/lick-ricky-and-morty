declare namespace RMApi {
  declare namespace Character {
    interface IInfo {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }

    interface IResult {
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

    interface IResponse {
      info: IInfo;
      results: IResult[];
    }
  }
}
