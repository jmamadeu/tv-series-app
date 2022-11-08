declare namespace API {
  declare namespace Show {
    type Response = {
      id: number;
      name: string;
      _embedded: {
        show: {
          image: {
            medium: string;
          };
          summary: string;
        };
      };
    };
  }
}
