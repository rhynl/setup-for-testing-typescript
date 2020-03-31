import { expect } from "chai";

import { Greeter } from "./greeter";

describe("Greeter", () => {
  it("should say hello...", () => {
    const greeter = new Greeter();

    expect(greeter.greetings("World")).to.be.equal("Hello, World");
  });

  it("should say What's up...", () => {
    const greeter = new Greeter("What's up");

    expect(greeter.greetings("World")).to.be.equal("What's up World");
  });
});
