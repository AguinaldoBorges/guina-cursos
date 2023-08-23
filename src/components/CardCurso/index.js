import React from 'react'
import './style.css'

export default function CardCurso({ imagem, titulo, link, logado, curso }) {
    const progressoDoCurso = curso.aulas.filter((item) => {
        return item.concluida
    }).length

    const entrarNoCurso = () => {
        localStorage.setItem('dbCurso', JSON.stringify(curso));
        window.location.href = `/curso`
    }

    return (
        <div class="card card-curso">
            <img src={imagem} class="card-img-top" alt="..." />
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h5 class="card-title">{titulo}</h5></li>
                    {logado && (
                        <>
                            <li class="list-group-item">
                                <progress value={progressoDoCurso} max={curso.aulas.length}></progress>
                            </li>
                            <li class="list-group-item">
                                <p class="card-link" onClick={() => entrarNoCurso()}>Entrar</p>
                            </li>
                        </>
                    )}
                    {!logado && (
                        <li class="list-group-item">
                            <p class="card-link">Entrar</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
