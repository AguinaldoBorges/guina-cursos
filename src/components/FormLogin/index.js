import { React, useState } from 'react'
import './style.css'


export default function FormLogin({ email, senha, mensagem, esqueciSenha, botao }) {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const usuarios = [
        {
            id: 1,
            nome: 'Aguinaldo Borges',
            email: 'tiaguinaldo2017@gmail.com',
            senha: '1234',
            nivel: '1',
        },
        {
            id: 2,
            nome: 'Tester da Silva',
            email: 'email@email.com',
            senha: '1234',
            nivel: '3',
        },
    ]

    const autenticar = (user, password) => {
        usuarios.map((usuario) => {
            if (user === usuario.email && password === usuario.senha) {
                window.location.href = '/dashboard';
            } else {
                console.log('Usuario ou senha incorretos!');
            }
        })
    }

    return (
        <form id='form-login'>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">{email}</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setUserEmail(event.target.value)} />
                <div id="emailHelp" class="form-text">{mensagem}</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">{senha}</label>
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div class="mb-3 ">
                {/* eslint-disable-next-line */}
                <a href="#">{esqueciSenha}</a>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => autenticar(userEmail, password)}>{botao}</button>
        </form>
    )
}
