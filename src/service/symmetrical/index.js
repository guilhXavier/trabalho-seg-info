import CryptoJS from 'crypto-js'

export const encryptData = (text) =>
  CryptoJS.AES.encrypt(text, localStorage.getItem('super-secretop')) + ''

export const decryptData = (encrypted) =>
  CryptoJS.AES.decrypt(
    encrypted,
    localStorage.getItem('super-secretop')
  ).toString(CryptoJS.enc.Utf8)
