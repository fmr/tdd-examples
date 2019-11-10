import {transformData} from "./transform";

//can get rid of this now
it('can call the function', () => {
  transformData({})
})

it('given map, returns map', () => {
  const result = transformData({})

  expect(result).toEqual({})
})

it('should fail when given undefined', function () {
  expect(() => transformData(undefined)).toThrow('need data')
})

it('given an empty stagedApply.roleRequirements, return an empty questionnaire array', function () {
  const input = {stagedApply: {roleRequirements: {}}}
  const expected = {questionnaire: []}

  const result = transformData(input)

  expect(result).toEqual(expected)
})

it('given one question, return transformed question, ', function () {
  const input = {stagedApply: {roleRequirements: {'question-1': 'IGNORED'}}}
  const expected = {questionnaire: [{questionId: '1'}]}

  const result = transformData(input)

  expect(result).toEqual(expected)
})

it('given a question without the right format, ignores the question ', function () {
  const input = {stagedApply: {roleRequirements: {'questionwithoutdash1': 'IGNORED'}}}
  const expected  = {questionnaire: []}

  const result = transformData(input)

  expect(result).toEqual(expected)
});