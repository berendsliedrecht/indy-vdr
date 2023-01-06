import type { IndyVdrPool } from 'indy-vdr-test-nodejs'

import { DID, setupPool } from './utils'

import { DisableAllTransactionAuthorAgreementsRequest } from 'indy-vdr-test-nodejs'

describe('DisableAllTransactionsAuthorAgreementRequest', () => {
  let pool: IndyVdrPool

  beforeAll(() => (pool = setupPool()))

  test('Submit request', async () => {
    const request = new DisableAllTransactionAuthorAgreementsRequest({ submitterDid: DID })

    await expect(pool.submitRequest(request)).rejects.toThrowError('MissingSignature()')
  })
})
