const { expect } = require("chai");
const calculator = require("../calculator");

describe("Calculator Tests (Lab02)", () => {

  it("add(5,2) expected result 7 PASS", () => {
    expect(calculator.add(5, 2)).to.equal(7);
    console.log("add(5,2) expected result 7 PASS");
  });

  it("add(5,2) expected result 8 FAIL", () => {
    expect(calculator.add(5, 2)).to.not.equal(8);
    console.log("add(5,2) expected result 8 FAIL");
  });

  it("sub(5,2) expected result 3 PASS", () => {
    expect(calculator.sub(5, 2)).to.equal(3);
    console.log("sub(5,2) expected result 3 PASS");
  });

  it("sub(5,2) expected result 5 FAIL", () => {
    expect(calculator.sub(5, 2)).to.not.equal(5);
    console.log("sub(5,2) expected result 5 FAIL");
  });

  it("mul(5,2) expected result 10 PASS", () => {
    expect(calculator.mul(5, 2)).to.equal(10);
    console.log("mul(5,2) expected result 10 PASS");
  });

  it("mul(5,2) expected result 12 FAIL", () => {
    expect(calculator.mul(5, 2)).to.not.equal(12);
    console.log("mul(5,2) expected result 12 FAIL");
  });

  it("div(10,2) expected result 5 PASS", () => {
    expect(calculator.div(10, 2)).to.equal(5);
    console.log("div(10,2) expected result 5 PASS");
  });

  it("div(10,2) expected result 2 FAIL", () => {
    expect(calculator.div(10, 2)).to.not.equal(2);
    console.log("div(10,2) expected result 2 FAIL");
  });

});
