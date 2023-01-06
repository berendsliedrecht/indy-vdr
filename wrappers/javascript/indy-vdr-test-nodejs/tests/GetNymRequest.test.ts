import type { GetNymResponse, IndyVdrPool } from 'indy-vdr-test-nodejs'

import { DID, setupPool } from './utils'

import { GetNymRequest } from 'indy-vdr-test-nodejs'

describe('GetNymRequest', () => {
  let pool: IndyVdrPool

  beforeAll(() => (pool = setupPool()))

  test('Submit request', async () => {
    const request = new GetNymRequest({ dest: DID })
    const response: GetNymResponse = await pool.submitRequest(request)

    expect(response).toMatchObject({ op: 'REPLY' })
  })
})
