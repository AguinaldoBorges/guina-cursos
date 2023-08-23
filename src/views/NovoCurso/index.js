import React from 'react'
import './style.css'
import FormNovoCurso from '../../components/FormNovoCurso'


export default function NovoCurso() {
    let cursoAtual = {
        id: 1,
        imagem: 'https://source.unsplash.com/random?a=1',
        titulo: 'Introdução ao HTML',
        aulas: [
            { id: 1, nome: ' Aula 1 ', url: 'be2t3N5wgBI', concluida: true },
            { id: 2, nome: ' Aula 2 ', url: 'lD6o7_TkgsQ', concluida: true },
            { id: 3, nome: ' Aula 3 ', url: 'X3YZqk_1LfU', concluida: false },
            { id: 4, nome: ' Aula 4 ', url: 'nMjSl0Rbs9o', concluida: false },
            { id: 5, nome: ' Aula 5 ', url: 'uenaNxYFVw4', concluida: false },
            { id: 6, nome: ' Aula 6 ', url: 'zzbqCO-HYGg', concluida: false },
        ]
    }

    return (
        <div>Novo Curso
            <FormNovoCurso curso={cursoAtual} />
        </div>
    )
}
