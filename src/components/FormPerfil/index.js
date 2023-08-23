import { React, useState } from 'react'
import './style.css'

export default function FormPerfil({ usuario }) {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [professor, setProfessor] = useState(false)
    const [usuarios, setUsuarios] = useState([])

    usuario = usuario ? usuario : { id: 0 }


    const validarFormulario = () => {
        if (!nome || !sobrenome || !email || !email.includes('@') || !senha || !confirmarSenha) {
            if (!email.includes('@')) {
                console.log('Email sem @');
                document.getElementById('formPerfil-email').focus()
                return false

            } else {
                console.log('Campo Vazio');
                return false
            }

        } else if (senha !== confirmarSenha) {

            console.log('Senhas diferentes');
            document.getElementById('formPerfil-confirmar-senha').focus()
            return false
        } else {
            return true
        }
    }

    const salvarUsuario = () => {

        if (validarFormulario()) {

            let novoNomeDeUsuario = '@' + nome + sobrenome

            let novoId

            if (usuario.id === 0) {
                novoId = usuarios.length > 0 ? usuarios.sort((a, b) => {
                    return b - a
                })[0].id + 1 : 1
            } else {
                novoId = usuario.id
            }

            let novoSobrenome = sobrenome.split(' ').map((item) => {
                return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
            }).join(' ')

            setTimeout(() => {
                let usuarioAtualizado = {
                    id: novoId,
                    nomeDeUsuario: novoNomeDeUsuario.slice(0, 13).toLowerCase(),
                    nome: nome.slice(0, 1).toUpperCase() + nome.slice(1).toLowerCase(),
                    sobrenome: novoSobrenome,
                    email: email,
                    senha: senha,
                    nivel: professor
                }

                let novosUsuarios = usuarios
                usuarios.push(usuarioAtualizado)

                setUsuarios(novosUsuarios)

                limparFormulario()

                console.log(usuarios);
            }, 1000);
        }

    }


    const limparFormulario = () => {
        setNome('')
        setSobrenome('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
        setProfessor(false)

    }

    return (
        <div className='container'>
            <div class="row">
                <div class="col col-lg-12  col-12 p-4">
                    {nome}
                    <input type="text" class="form-control" placeholder="Primeiro nome" aria-label="Primeiro nome" onChange={(e) => setNome(e.target.value)} value={nome} />
                </div>
                <div class="col col-lg-12  col-12 p-4">
                    <input type="text" class="form-control" placeholder="Sobrenome" aria-label="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} value={sobrenome} />
                </div>
            </div>

            <div class="row">
                <div class="col col-lg-12  col-12 p-4">
                    <input type="email" class="form-control" placeholder="E-mail" aria-label="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} id='formPerfil-email' />
                </div>
                <div class="col col-lg-6 col-md-6 col-12 p-4">
                    <input type="password" class="form-control" placeholder="Senha" aria-label="Senha" onChange={(e) => setSenha(e.target.value)} value={senha} />
                </div>
                <div class="col col-lg-6 col-md-6 col-12 p-4">
                    <input type="password" class="form-control" placeholder="Confirmar senha" aria-label="Confirmar senha" onChange={(e) => setConfirmarSenha(e.target.value)} value={confirmarSenha} id='formPerfil-confirmar-senha' />
                </div>
            </div>

            <div class="row">
                <div class="col col-12 p-4">
                    <div class="form-check form-switch" id='formPerfil-check'>
                        <input class="form-check-input" type="checkbox" role="switch" id="formPerfil-professor" checked={professor} onChange={(e) => setProfessor(e.target.checked)} />
                        <label class="form-check-label m-2 mt-0 mb-0 text-danger" for="formPerfil-professor"><strong>Professor(a)</strong></label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-12 p-4">
                    <button type="button" class="btn btn-danger" id='perfil-btn-salvar' onClick={() => salvarUsuario()}>Salvar</button>
                </div>
            </div>
        </div>
    )
}
