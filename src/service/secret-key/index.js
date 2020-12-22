import CryptoJS from 'crypto-js'

export const generateKeyFromPassword = (password) => {
  const salt = CryptoJS.lib.WordArray.random(16)

  const superSecret = CryptoJS.PBKDF2(password, salt, { keySize: 128 / 32 })

  localStorage.setItem('super-secretop', superSecret)

  return superSecret + ''
}
