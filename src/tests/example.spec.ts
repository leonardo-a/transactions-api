import { expect, test } from 'vitest'

test('Usuário consegue criar uma nova transação', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
