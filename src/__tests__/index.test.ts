import { describe, expect, it } from "vitest";
import typuv from "../index";

describe("typuv", () => {
  it("should return the typeof the passed in value", () => {
    expect(typuv(true)).toEqual("boolean");
    expect(typuv(0)).toEqual("number");
    expect(typuv("I am a string")).toEqual("string");
    expect(typuv([])).toEqual("array");
    expect(typuv(() => {})).toEqual("function");
    expect(typuv(Symbol("I can't remember what we use symbols for!"))).toEqual(
      "symbol"
    );
    expect(typuv(undefined)).toEqual("undefined");
    expect(typuv(null)).toEqual("null");
  });
});
