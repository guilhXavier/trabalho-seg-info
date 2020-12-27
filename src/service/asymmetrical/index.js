import NodeRSA from 'node-rsa'
const key = new NodeRSA({ b: 512 })

export const asymmEncrypt = (text) => key.encrypt(text, 'base64')

export const asymmDecrypt = (encrypted) => key.decrypt(encrypted, 'utf8')
