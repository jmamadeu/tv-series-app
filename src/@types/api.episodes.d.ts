declare namespace API {
  declare namespace Episode {
    type Response = {
      id: number;
      name: string;
      number: number;
      season: string;
      summary: string;
      image: { medium: string };
    };

    type ParsedResponse = {
      title: string;
      data: Array<Module.Episode.Type>;
    };
  }
}
