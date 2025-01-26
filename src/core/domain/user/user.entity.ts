export class User {
    constructor(
      private readonly id: string,
      private readonly name: string,
      private readonly email: string,
    ) {}
  
    public getId(): string {
      return this.id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getEmail(): string {
      return this.email;
    }
  }
  