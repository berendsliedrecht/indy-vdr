import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  testTimeout: 120000,
  moduleNameMapper: {
    '^indy-vdr-test-shared$': '<rootDir>/../indy-vdr-test-shared/src',
    '^indy-vdr-test-nodejs$': '<rootDir>/src',
  },
}

export default config
