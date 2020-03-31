/**
 * Greeter class allows to perform a greeting to the user.
 */
export class Greeter {
  private readonly salutation: string;

  /**
   * Creates a new Greeter object that can perform a greeting
   * @param salutation message to be returned as greeting to the user.
   */
  constructor(salutation?: string) {
    this.salutation = salutation ?? "Hello,";
  }

  /**
   * greetings method greets to the user by the given name.
   * @param name to be greeted
   */
  public greetings(name: string): string {
    return this.salutation + " " + name;
  }
}
