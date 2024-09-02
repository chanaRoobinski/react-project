export class User {
    constructor(
      public userName?: string,
      public password?: string,
      public address?: string,
      public phon?: string,
      public isManager?: Boolean,
      public Favorites?: Array<string>
    ) {}
  }