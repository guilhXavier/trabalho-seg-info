import React, { useState, useRef } from 'react'
import { encryptData, decryptData } from '../../../service/symmetrical'
import { asymmDecrypt, asymmEncrypt } from '../../../service/asymmetrical'
import './criptografia.css'

const ENCRYPT_FN = {
  symmetrical: encryptData,
  asymmetrical: asymmEncrypt,
}

const DECRYPT_FN = {
  symmetrical: decryptData,
  asymmetrical: asymmDecrypt,
}

export const Criptografia = () => {
  const [encryption, setEncryption] = useState('symmetrical')
  const [mensagem, setMensagem] = useState('')
  const [buttonCrypt, setButtonCrypt] = useState(true)
  const textArea = useRef(null)
  console.log(encryption)
  const handleEncryptClick = (event) => {
    event.preventDefault()
    textArea.current.value = ENCRYPT_FN[encryption](mensagem)
    textArea.current.readOnly = true
    setMensagem(textArea.current.value)
    setButtonCrypt(!buttonCrypt)
  }

  const handleDecryptClick = (event) => {
    event.preventDefault()
    textArea.current.value = DECRYPT_FN[encryption](mensagem)
    textArea.current.readOnly = false
    setMensagem(textArea.current.value)
    setButtonCrypt(!buttonCrypt)
  }

  return (
    <div className="screen-criptografia">
      <div className="criptografia-container">
        <div className="cripto-header">
          <h2>Criptografia</h2>
          <p>Digite uma mensagem para criptografa-lá:</p>
          <select
            className="select-crypt"
            value={encryption}
            onChange={(e) => setEncryption(e.currentTarget.value)}
          >
            <option value="symmetrical">Simetrico</option>
            <option value="asymmetrical">Assimetrico</option>
          </select>
        </div>
        <textarea
          ref={textArea}
          className="textAreaStyle"
          placeholder="Mensagem"
          onChange={(event) => setMensagem(event.target.value)}
        />
        {buttonCrypt ? (
          <button onClick={handleEncryptClick} className="encryptButtonStyle">
            Criptografar
          </button>
        ) : (
          <button onClick={handleDecryptClick} className="decryptButtonStyle">
            Decriptografar
          </button>
        )}
      </div>
    </div>
  )
}
