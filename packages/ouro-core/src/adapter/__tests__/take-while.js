// @flow

import TakeWhile from '../take-while'
import * as ouro from '../../'

let subj

beforeEach(() => {
  const { producer } = ouro.of(1, 2, 3, 4, 5, 6)
  subj = new TakeWhile(producer, value => value <= 3)
})

test('#@@iterator()', () => {
  for (const item of subj) {
    expect(item).toMatchSnapshot()
  }
})

test('#next()', () => {
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
})