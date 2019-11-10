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
});

it('given one question, return transformed question, ', function () {
  const input = {
    stagedApply:
      {
        roleRequirements: {'question-1': 'IGNORED'}
      }
  }

  const result = transformData(input)

  const expected = {
    questionnaire: [
      {questionId: '1'}
    ]
  }

  expect(result).toEqual(expected)
});