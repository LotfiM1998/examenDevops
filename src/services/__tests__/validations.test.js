const { isEmpty } = require("../validations");
const { under_eight_char } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - minimum 8 char", () => {
    test("should return true as the label is under 8 char", () => {
        const result = under_eight_char("1");
        expect(result).toBe(true);
    });

    test("should return false as the label is at 8 char", () => {
        const result = under_eight_char("12345678");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
