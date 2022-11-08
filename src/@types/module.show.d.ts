declare namespace Module {
  declare namespace Show {
    type Type = {
      id: number;
      name: string;
      _embedded: {
        show: {
          image: {
            medium: string;
          };
        };
      };
    };
  }
}
