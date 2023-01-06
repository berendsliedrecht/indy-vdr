import type { IndyVdrPool } from 'indy-vdr-test-nodejs'

import { DID, setupPool } from './utils'

import { TransactionAuthorAgreementRequest } from 'indy-vdr-test-nodejs'

describe('TransactionAuthorAgreementRequest', () => {
  let pool: IndyVdrPool

  beforeAll(() => (pool = setupPool()))

  test('Submit request', async () => {
    const request = new TransactionAuthorAgreementRequest({
      submitterDid: DID,
      version: 'TODO',
    })

    await expect(pool.submitRequest(request)).rejects.toThrowError('MissingSignature()')
  })
})
