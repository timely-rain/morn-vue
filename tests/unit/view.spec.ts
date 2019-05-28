import { View } from '@/view'

describe('view.ts', () => {
  const view = new View()

  test('addStates:add', () => {
    expect(view.addStates('add')).toEqual(['add', 'default'])
  })

  test('addStates:update', () => {
    expect(view.addStates('update')).toEqual(['add', 'default', 'update'])
  })

  test('hasStates:add', () => {
    expect(view.hasStates('add')).toBe(true)
  })

  test('hasStates:update', () => {
    expect(view.hasStates('update')).toBe(true)
  })

  test('isAdd', () => {
    expect(view.isAdd()).toBe(true)
  })

  test('isUpdate', () => {
    expect(view.isUpdate()).toBe(true)
  })

  test('isEdit', () => {
    expect(view.isEdit()).toBe(true)
  })
})
