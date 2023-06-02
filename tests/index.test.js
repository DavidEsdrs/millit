const millit = require("../src/index.js");

test("Convert simple value to milliseconds", () => {
    expect(millit("10")).toEqual(10);
    expect(millit("10s")).toEqual(10000);
    expect(millit("10m")).toEqual(600000);
    expect(millit("10h")).toEqual(36000000);
    expect(millit("10d")).toEqual(864000000);
    expect(millit("1y")).toEqual(31557600000);
});

test("Convert simple value to milliseconds even with spaces", () => {
    expect(millit("10 ")).toEqual(10);
    expect(millit("10 s")).toEqual(10000);
    expect(millit("10  m")).toEqual(600000);
    expect(millit("10  h")).toEqual(36000000);
    expect(millit("10  d")).toEqual(864000000);
    expect(millit("1  y")).toEqual(31557600000);
});

test("Convert compost value to milliseconds", () => {
    expect(millit("1m20s10")).toEqual(80010);
    expect(millit("2m20s10")).toEqual(140010);
    expect(millit("2m20s10")).toEqual(140010);
    expect(millit("30d2m20s10")).toEqual(2592140010);
    expect(millit("1y30d2m20s10")).toEqual(34149740010);
});

test("Convert compost value to milliseconds even with spaces", () => {
    expect(millit("1m 20s")).toEqual(80000);
    expect(millit("2 m 20 s")).toEqual(140000);
    expect(millit("2m 20s 10")).toEqual(140010);
    expect(millit("30d 2m 20s")).toEqual(2592140000);
    expect(millit("1y 30d 2m 20s")).toEqual(34149740000);
});

test("Convert simple negative value to negative milliseconds", () => {
    expect(millit("-10")).toEqual(-10);
    expect(millit("-10s")).toEqual(-10000);
    expect(millit("-10m")).toEqual(-600000);
    expect(millit("-10h")).toEqual(-36000000);
    expect(millit("-10d")).toEqual(-864000000);
    expect(millit("-1y")).toEqual(-31557600000);
});

test("Convert simple negative value to negative milliseconds even with spaces", () => {
    expect(millit("- 10")).toEqual(-10);
    expect(millit("- 10 s")).toEqual(-10000);
    expect(millit("- 10 m")).toEqual(-600000);
    expect(millit("- 10 h")).toEqual(-36000000);
    expect(millit("- 10 d")).toEqual(-864000000);
    expect(millit("- 1 y")).toEqual(-31557600000);
});

test("Convert real number to milliseconds", () => {
    expect(millit("10.5")).toEqual(10.5);
    expect(millit("10.5s")).toEqual(10500);
    expect(millit("10.5m")).toEqual(630000);
    expect(millit("10.5h")).toEqual(37800000);
    expect(millit("10.5d")).toEqual(907200000);
    expect(millit("1.5y")).toEqual(47336400000);
});