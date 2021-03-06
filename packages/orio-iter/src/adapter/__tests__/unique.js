// @flow

import Unique from '../unique'
import * as orio from '../../'

let fn
let subj

beforeEach(() => {
  const { producer } = orio.of(1, 2, 1, 3, 2, 3)

  fn = jest.fn(item => item)
  subj = new Unique(producer, fn)

  jest.spyOn(subj.producer, 'drop')
})

afterEach(() => {
  fn.mockClear()
  jest.resetAllMocks()
})

test('#drop()', () => {
  expect(subj.drop()).toBeUndefined()
  expect(subj.history.size).toBe(0)
  expect(subj.producer.drop).toHaveBeenCalled()
})

test('#next()', () => {
  {
    const next = subj.next()

    expect(next).toMatchSnapshot()
    expect(fn).toHaveBeenLastCalledWith(next.value)
  }

  {
    const next = subj.next()

    expect(next).toMatchSnapshot()
    expect(fn).toHaveBeenLastCalledWith(next.value)
  }

  {
    const next = subj.next()

    expect(next).toMatchSnapshot()
    expect(fn).toHaveBeenLastCalledWith(next.value)
  }

  expect(subj.next()).toMatchSnapshot()
})
