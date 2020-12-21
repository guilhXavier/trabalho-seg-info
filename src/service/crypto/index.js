import CryptoJS from 'crypto-js'

export const generateKeyFromPassword = (password) => {
  const salt = CryptoJS.lib.WordArray.random(16)

  return CryptoJS.PBKDF2(password, salt, { keySize: 128 / 32 })
}
