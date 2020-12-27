import React, { useState, useRef } from 'react'
import { encryptData, decryptData } from '../../../service/symmetrical'
import './criptografia.css'

export const Criptografia = () => {
    const [mensagem, setMensagem] = useState('')
    const [buttonCrypt, setButtonCrypt] = useState(true)
    const textArea = useRef(null)

    const handleEncryptClick = (event) =>{
        event.preventDefault()
        textArea.current.value = encryptData(mensagem)
        textArea.current.readOnly = true
        setMensagem(textArea.current.value)
        setButtonCrypt(!buttonCrypt)
    }

    const handleDecryptClick = (event) =>{
        event.preventDefault()
        textArea.current.value = decryptData(mensagem)
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
                </div>
                <textarea ref={textArea} className="textAreaStyle" placeholder="Mensagem" 
                    onChange={(event) => setMensagem(event.target.value)} />
                {buttonCrypt ?
                    <button onClick={handleEncryptClick} className="encryptButtonStyle">Criptografar</button>
                    :
                    <button onClick={handleDecryptClick} className="decryptButtonStyle">Decriptografar</button>
                }
            </div>
        </div>
    )
}