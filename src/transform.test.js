import { transformData } from "./transform";

//can get rid of this now
it("can call the function", () => {
  transformData({});
});

it("given map, returns map", () => {
  const result = transformData({});

  expect(result).toEqual({});
});

it("should fail when given undefined", () => {
  expect(() => transformData(undefined)).toThrow("need data");
});

it("given an empty roleRequirements, return an empty questionnaire array", () => {
  const input = { roleRequirements: {} };
  const expected = { questionnaire: [] };

  const result = transformData(input);

  expect(result).toEqual(expected);
});

it("given one question, return transformed question", () => {
  const input = {
    roleRequirements: { "question-1": "IGNORED" },
  };
  const expected = { questionnaire: [{ questionId: "1", answers: "IGNORED" }] };

  const result = transformData(input);

  expect(result).toEqual(expected);
});

it("given a question without the right format, ignores the question", () => {
  const input = {
    roleRequirements: { questionwithoutdash1: "IGNORED" },
  };
  const expected = { questionnaire: [] };

  const result = transformData(input);

  expect(result).toEqual(expected);
});

it("given multiple questions, return transformed questions", () => {
  const input = {
    roleRequirements: { "question-1": "IGNORED", "question-2": "IGNORED" },
  };
  const expected = {
    questionnaire: [
      { questionId: "1", answers: "IGNORED" },
      { questionId: "2", answers: "IGNORED" },
    ],
  };

  const result = transformData(input);

  expect(result).toEqual(expected);
});

it("transforms answers", () => {
  const input = {
    roleRequirements: { "question-1": ["answer1"] },
  };
  const expected = {
    questionnaire: [{ questionId: "1", answers: ["answer1"] }],
  };

  const result = transformData(input);

  expect(result).toEqual(expected);
});
