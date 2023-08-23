import React from 'react'
import './style.css'
import FormLogin from '../../components/FormLogin'

export default function login() {
    return (
        <div className='.container-fluid' id='login'>
            <div className='row'>
                <div className='col col-12 d-flex'>
                    <div className='barraLateral'></div>
                    <div className='d-flex justify-content-center align-items-center w-100' id='login-main'>
                        <h1 className='w-100'>Guina Cursos</h1>
                        <FormLogin email={'E-mail'} senha={'Senha'} mensagem={'Nunca compartilharemos seu e-mail com mais ninguém.'} esqueciSenha={'Esqueci minha senha'} botao={'Entrar'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
