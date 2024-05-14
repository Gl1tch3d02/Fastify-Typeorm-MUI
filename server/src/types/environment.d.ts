/* eslint-disable @typescript-eslint/consistent-type-definitions */

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string
            NODE_ENV: string
            PRIVATE_KEY_PATH: string
            CERTIFICATE_PATH: string
        }
    }
}

export {}
