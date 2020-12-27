import React, {useState} from 'react'
import { generateKeyFromPassword } from '../../../service/secret-key/'
import './login.css'

export const Login = () =>{
    const [senha, setSenha] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        generateKeyFromPassword(senha)
    }

    return(
        <div className="screen-login">
            <div className="form-container">
                <div className="form-header">
                    <h2>Login</h2>
                    <p>Digite seu email e senha abaixo:</p>
                </div>
                <form onSubmit={handleSubmit} className="form-body" >
                    <label className="labelStyle" htmlFor="Email">
                        <input className="inputStyle" type="text" id="Email" name="inputEmail" 
                        placeholder="Email"/>
                    </label>
                    <label className="labelStyle" htmlFor="Senha">
                        <input className="inputStyle" type="password" id="Senha" name="inputSenha" 
                        placeholder="Senha" required onChange ={(event) => setSenha(event.target.value)}/>
                    </label>
                    <button className="buttonStyle">Entrar</button>
                </form>
            </div>
        </div>
    )
}