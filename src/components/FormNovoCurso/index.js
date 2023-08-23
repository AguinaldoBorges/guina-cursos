import { React, useState } from 'react'
import './style.css'
import imagemDefault from '../../assets/imageDefault.png'

export default function FormNovoCurso({ curso }) {
    if (!curso) {
        curso = {
            titulo: '',
            imagem: imagemDefault,
            aulas: []
        }
    }

    const [cursoTitulo, setCursoTitulo] = useState(curso.titulo)
    const [cursoImg, setCursoImg] = useState(curso.imagem)
    const [aulas, setAulas] = useState(curso.aulas)

    console.log(curso);

    const [aulaTitulo, setAulaTitulo] = useState('')
    const [aulaUrl, setAulaUrl] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [mensagemTipo, setMensagemTipo] = useState('')
    const [atualizarAula, setAtualizarAula] = useState(false)
    const [aulaAtualizadaId, setAulaAtualizadaId] = useState(0)


    const adicionarNovaAula = () => {
        if (aulaTitulo && aulaUrl) {
            let novasAulas = aulas
            novasAulas.push(
                {
                    id: novasAulas.length > 0 ? novasAulas.length + 1 : 1,
                    nome: aulaTitulo,
                    url: aulaUrl,
                    concluida: false
                }
            )
            setAulas(novasAulas)
            limparCamposAulas()

            setMensagem('Aula adicionada com sucesso!')
            setMensagemTipo('sucesso')

            setTimeout(() => {
                setMensagemTipo('')
                setMensagem('')
            }, 2500);

        } else {
            setMensagem('Título ou Url da aula faltando. Preencha todos os campos e tente novamente.')
            setMensagemTipo('alerta')

            setTimeout(() => {
                setMensagemTipo('')
                setMensagem('')
            }, 2500);
        }

    }
    const limparCamposAulas = () => {
        setAulaTitulo('')
        setAulaUrl('')
    }

    const excluirAula = (id) => {
        let novasAulas = aulas.filter((item) => {
            return item.id !== id
        })

        setAulas(novasAulas)
    }

    const atualizarAulas = (id) => {
        setAtualizarAula(true)

        let aula = aulas.filter((item) => {
            console.log(item);
            return item.id === id
        })
        aula = aula[0]

        setAulaTitulo(aula.nome)
        setAulaUrl(aula.url)
        setAulaAtualizadaId(aula.id)

    }

    const salvarAulaAtualizada = () => {
        let id = aulaAtualizadaId
        let aulasAtualizadas = []

        for (const item of aulas) {
            if (item.id === id) {
                aulasAtualizadas.push(
                    {
                        id: item.id,
                        nome: aulaTitulo,
                        url: aulaUrl,
                        concluida: item.concluida
                    }
                )
            } else {
                aulasAtualizadas.push(item)
            }
        }

        setAulas(aulasAtualizadas)
        setMensagemTipo('sucesso')
        setMensagem('Aula atualizada com sucesso!')
        setAtualizarAula(false)

        setTimeout(() => {
            limparCamposAulas()
            setMensagemTipo('')
            setMensagem('')
            setAulaAtualizadaId(0)
        }, 1000);

    }

    const salvarCurso = () => {

    }

    return (
        <div className='container'>Cadastrar Curso
            <div class="row m-2">
                <div class="col col-lg-8 col-md-7 col-12 p-1">
                    <div className='container'>
                        Informações do Curso
                        <div class="row m-2">
                            <div class="col col-lg-6 col-md-6 col-12 p-1">
                                <input type="text" class="form-control" placeholder="Título do Curso" aria-label="Título do Curso" onChange={(e) => setCursoTitulo(e.target.value)} value={cursoTitulo} />
                            </div>
                            <div class="col col-lg-6 col-md-6 col-12 p-1">
                                <input type="text" class="form-control" placeholder="Imagem" aria-label="Imagem" onChange={(e) => setCursoImg(e.target.value)} />
                            </div>
                        </div>
                        Aulas
                        <div class="row m-2">
                            <div class="col col-lg-6 col-md-6 col-12 p-1">
                                <input type="text" class="form-control aula-input" placeholder="Título da Aula" aria-label="Título da Aula" onChange={(e) => setAulaTitulo(e.target.value)} value={aulaTitulo} />
                            </div>
                            <div class="col col-lg-6 col-md-6 col-12 p-1">
                                <input type="text" class="form-control aula-input" placeholder="Url da aula" aria-label="Url da aula" onChange={(e) => setAulaUrl(e.target.value)} value={aulaUrl} />
                            </div>
                        </div>

                        {!atualizarAula &&
                            <div class="row m-2 mt-4">
                                <button type="button" class="btn btn-danger" onClick={() => adicionarNovaAula()}>Adicionar Aula</button>
                            </div>
                        }
                        {atualizarAula &&
                            <div class="row m-2 mt-4">
                                <button type="button" class="btn btn-warning" onClick={() => salvarAulaAtualizada()}>Atualizar Aula</button>
                            </div>
                        }

                        {aulas.length > 0 &&
                            <div class="row m-2 mt-4">
                                <button type="button" class="btn btn-success" onClick={() => salvarCurso()}>Salvar Curso</button>
                            </div>
                        }

                        <div class="row m-2 mt-5">
                            {mensagemTipo === 'alerta' &&
                                <div class="alert alert-warning" role="alert">
                                    {mensagem}
                                </div>
                            }
                            {mensagemTipo === 'sucesso' &&
                                <div class="alert alert-success" role="alert">
                                    {mensagem}
                                </div>
                            }

                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-md-5 col-12 p-1">
                    Prévia
                    <img src={cursoImg} alt="" id='novo-curso-imagem' />
                    <h2>{cursoTitulo}</h2>
                    <hr />
                    <p>Aulas</p>
                    <div id='aulas-container'>
                        {aulas.map((item, index) => {
                            return (
                                <div class="col-12 p-2" key={index}>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-8">
                                                {item.nome}
                                            </div>
                                            <div class="col-2">
                                                <button type="button" class="btn btn-warning" onClick={() => atualizarAulas(item.id)}>
                                                    <span class="material-symbols-outlined">
                                                        edit
                                                    </span>
                                                </button>
                                            </div>
                                            <div class="col-2">
                                                <button type="button" class="btn btn-danger" onClick={() => excluirAula(item.id)}>
                                                    <span class="material-symbols-outlined">
                                                        delete
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
