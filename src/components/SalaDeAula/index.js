import { React, useState, useEffect } from 'react'
import './style.css'

export default function SalaDeAula({ curso }) {
    const [dbCurso, setDbCurso] = useState(JSON.parse(localStorage.getItem('dbCurso')))
    const [novoCursoAulas, setNovoCursoAulas] = useState(dbCurso.aulas)

    /* const dbCurso = curso */

    /* const dbCurso = {
        id: 1,
        imagem: 'https://source.unsplash.com/random?a=1',
        titulo: 'Curso de Canto para Iniciantes',
        link: '98Iph8Pdt80',
        progresso: 0,
        aulas: [
            { id: 1, nome: ' Aula 1 ', url: 'be2t3N5wgBI', concluida: false },
            { id: 2, nome: ' Aula 2 ', url: 'lD6o7_TkgsQ', concluida: false },
            { id: 3, nome: ' Aula 3 ', url: 'X3YZqk_1LfU', concluida: false },
            { id: 4, nome: ' Aula 4 ', url: 'nMjSl0Rbs9o', concluida: false },
            { id: 5, nome: ' Aula 5 ', url: 'uenaNxYFVw4', concluida: false },
            { id: 6, nome: ' Aula 6 ', url: 'zzbqCO-HYGg', concluida: false },
            // ... outras aulas ...
        ]
    } */


    const aulasConcluidas = novoCursoAulas.filter((item) => {
        return item.concluida === true
    })
    const [progresso, setProgresso] = useState(aulasConcluidas.length)


    const novoCurso = {
        id: dbCurso.id,
        imagem: dbCurso.imagem,
        titulo: dbCurso.titulo,
        link: dbCurso.link,
        progresso: progresso,
        aulas: novoCursoAulas
    }

    console.log(progresso);
    console.log(novoCurso.aulas.length);

    const updateProgresso = () => {
        let aulasConcluidas = novoCursoAulas.filter((item) => {
            return item.concluida === true
        })
        setProgresso(aulasConcluidas.length)
    }

    function marcarConcluida(id) {
        let novaListaDeAulas = []
        novoCurso.aulas.map((item) => {
            if (item.id === id) {
                item.concluida = !item.concluida
            }
            novaListaDeAulas.push(item)
        })

        setNovoCursoAulas(novaListaDeAulas)

        updateProgresso()

        console.log(novoCurso.aulas);
    }


    const [aula, setAula] = useState(novoCurso.aulas[0].url)

    const renderizarListaDasAulas = novoCurso.aulas.map((item) => {

        return <div>
            {aula === item.url &&
                <li class="list-group-item bg-danger active d-flex justify-content-between align-items-center" aria-current="true" onClick={setAula.bind(null, novoCurso.aulas[item.id - 1].url)}>
                    {item.concluida &&
                        <span class="material-symbols-outlined concluido" onClick={() => marcarConcluida(item.id)}>
                            check_circle
                        </span>
                    }
                    {!item.concluida &&
                        <span class="material-symbols-outlined" onClick={() => marcarConcluida(item.id)}>
                            play_circle
                        </span>
                    }
                    <span className='aula-nome'>{item.nome}</span>
                </li>
            }
            {aula !== item.url &&
                <li class="list-group-item  d-flex justify-content-between align-items-center" aria-current="false" onClick={setAula.bind(null, novoCurso.aulas[item.id - 1].url)}>
                    {item.concluida &&
                        <span class="material-symbols-outlined concluido" onClick={() => marcarConcluida(item.id)}>
                            check_circle
                        </span>
                    }
                    {!item.concluida &&
                        <span class="material-symbols-outlined" onClick={() => marcarConcluida(item.id)}>
                            play_circle
                        </span>
                    }
                    <span className='aula-nome'>{item.nome}</span>
                </li>
            }

        </div>
    })

    return (
        <div className='container' id='sala-de-aula'>
            Sala de Aula
            <div className='row'>
                <div className='col col-lg-8 col-md-9 col-12'>
                    <iframe width="" height="" src={`https://www.youtube.com/embed/${aula}`} title={novoCurso.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;  " allowfullscreen className='w-100'></iframe>
                </div>
                <div className='col col-lg-4 col-md-3 col-12 pt-0 pb-0 p-3'>
                    <h3>{novoCurso.titulo}</h3>
                    <p><strong>Progresso:</strong></p>
                    <progress value={progresso} max={dbCurso.aulas.length}></progress>
                    <ul class="list-group">
                        {renderizarListaDasAulas}
                    </ul>


                </div>
            </div>
        </div>
    )
}
