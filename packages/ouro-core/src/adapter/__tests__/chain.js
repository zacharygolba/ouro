// @flow

import Chain from '../chain'
import * as ouro from '../../'

let subj

beforeEach(() => {
  const producerA = ouro.of(1, 2, 3).producer
  const producerB = ouro.of(4, 5, 6).producer
  subj = new Chain(producerA, producerB)

  jest.spyOn(subj.producerA, 'drop')
  jest.spyOn(subj.producerB, 'drop')
})

afterEach(() => {
  jest.resetAllMocks()
})

test('#drop()', () => {
  expect(subj.drop()).toBeUndefined()
  expect(subj.producerA.drop).toHaveBeenCalled()
  expect(subj.producerB.drop).toHaveBeenCalled()
})

test('#next()', () => {
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
  expect(subj.next()).toMatchSnapshot()
})
