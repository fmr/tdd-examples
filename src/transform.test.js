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
  const input = {
    stagedApply:
      {
        roleRequirements: {}
      }
  }

  const result = transformData(input)

  const expected = {
    questionnaire: []
  }

  expect(result).toEqual(expected)
});