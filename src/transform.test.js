import {transformData} from "./transform";

it('can call the function', () => {
  transformData()
})

it('given map, returns map', () => {
  const result = transformData({})

  expect(result).toEqual({})
})
