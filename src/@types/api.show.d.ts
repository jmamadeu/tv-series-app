declare namespace API {
  declare namespace Show {
    type Response = {
      id: number;
      name: string;
      genres: Array<string>;
      summary: string;
      premiered: string;
      image: {
        medium: string;
      };
      rating: {
        average: number;
      };
    };
  }
}
