import { React, useState } from 'react'
import './style.css'
import CardCurso from '../CardCurso'

export default function ListaDeCursos({ logado }) {
    {/* imagem, titulo, link, progresso */ }
    const cursos = [
        {
            id: 1,
            imagem: 'https://source.unsplash.com/random?a=1',
            titulo: 'Introdução ao HTML',
            link: 'https://exemplo.com/curso-html',
            progresso: 90,
            aulas: [
                { id: 1, nome: ' Aula 1 ', url: 'be2t3N5wgBI', concluida: true },
                { id: 2, nome: ' Aula 2 ', url: 'lD6o7_TkgsQ', concluida: true },
                { id: 3, nome: ' Aula 3 ', url: 'X3YZqk_1LfU', concluida: false },
                { id: 4, nome: ' Aula 4 ', url: 'nMjSl0Rbs9o', concluida: false },
                { id: 5, nome: ' Aula 5 ', url: 'uenaNxYFVw4', concluida: false },
                { id: 6, nome: ' Aula 6 ', url: 'zzbqCO-HYGg', concluida: false },
            ]
        },
        {
            id: 2,
            imagem: 'https://source.unsplash.com/random?b=1',
            titulo: 'CSS para Iniciantes',
            link: 'https://exemplo.com/curso-css',
            progresso: 70,
            aulas: [
                { id: 1, nome: ' Aula 1 ', url: 'be2t3N5wgBI', concluida: false },
                { id: 2, nome: ' Aula 2 ', url: 'lD6o7_TkgsQ', concluida: false },
                { id: 3, nome: ' Aula 3 ', url: 'X3YZqk_1LfU', concluida: false },
                { id: 4, nome: ' Aula 4 ', url: 'nMjSl0Rbs9o', concluida: false },
                { id: 5, nome: ' Aula 5 ', url: 'uenaNxYFVw4', concluida: false },
                { id: 6, nome: ' Aula 6 ', url: 'zzbqCO-HYGg', concluida: false },
            ]
        },
        {
            id: 3,
            imagem: 'https://source.unsplash.com/random?c=1',
            titulo: 'JavaScript Essencial',
            link: 'https://exemplo.com/curso-js-essencial',
            progresso: 50,
            aulas: [
                { id: 1, nome: ' Aula 1 ', url: 'be2t3N5wgBI', concluida: true },
                { id: 2, nome: ' Aula 2 ', url: 'lD6o7_TkgsQ', concluida: true },
                { id: 3, nome: ' Aula 3 ', url: 'X3YZqk_1LfU', concluida: true },
                { id: 4, nome: ' Aula 4 ', url: 'nMjSl0Rbs9o', concluida: false },
                { id: 5, nome: ' Aula 5 ', url: 'uenaNxYFVw4', concluida: false },
                { id: 6, nome: ' Aula 6 ', url: 'zzbqCO-HYGg', concluida: false },
            ]
        },
        {
            id: 4,
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
        },
        // ... outros cursos de HTML, CSS e JavaScript ...
        {
            id: 18,
            imagem: 'https://source.unsplash.com/random?a=2',
            titulo: 'Avançando com CSS Grid',
            link: 'https://exemplo.com/curso-css-grid',
            progresso: 80,
            aulas: [
                { id: 1, nome: ' Aula 1 ', url: 'be2t3N5wgBI', concluida: true },
                { id: 2, nome: ' Aula 2 ', url: 'lD6o7_TkgsQ', concluida: true },
                { id: 3, nome: ' Aula 3 ', url: 'X3YZqk_1LfU', concluida: false },
                { id: 4, nome: ' Aula 4 ', url: 'nMjSl0Rbs9o', concluida: false },
                { id: 5, nome: ' Aula 5 ', url: 'uenaNxYFVw4', concluida: false },
                { id: 6, nome: ' Aula 6 ', url: 'zzbqCO-HYGg', concluida: false },
            ]
        },
        {
            id: 17,
            imagem: 'https://source.unsplash.com/random?b=2',
            titulo: 'Node.js do Zero ao Avançado',
            link: 'https://exemplo.com/curso-nodejs',
            progresso: 30,
            aulas: [
                { id: 1, nome: ' Aula 1 ', url: 'be2t3N5wgBI', concluida: true },
                { id: 2, nome: ' Aula 2 ', url: 'lD6o7_TkgsQ', concluida: true },
                { id: 3, nome: ' Aula 3 ', url: 'X3YZqk_1LfU', concluida: true },
                { id: 4, nome: ' Aula 4 ', url: 'nMjSl0Rbs9o', concluida: true },
                { id: 5, nome: ' Aula 5 ', url: 'uenaNxYFVw4', concluida: true },
                { id: 6, nome: ' Aula 6 ', url: 'zzbqCO-HYGg', concluida: false },
            ]
        },
        {
            id: 18,
            imagem: 'https://source.unsplash.com/random?c=3',
            titulo: 'Projeto Prático: Site Interativo com JavaScript',
            link: 'https://exemplo.com/projeto-site-interativo',
            progresso: 10,
            aulas: [
                { id: 1, nome: ' Aula 1 ', url: 'be2t3N5wgBI', concluida: true },
                { id: 2, nome: ' Aula 2 ', url: 'lD6o7_TkgsQ', concluida: false },
                { id: 3, nome: ' Aula 3 ', url: 'X3YZqk_1LfU', concluida: false },
                { id: 4, nome: ' Aula 4 ', url: 'nMjSl0Rbs9o', concluida: false },
                { id: 5, nome: ' Aula 5 ', url: 'uenaNxYFVw4', concluida: false },
                { id: 6, nome: ' Aula 6 ', url: 'zzbqCO-HYGg', concluida: false },
            ]
        }
    ];


    const [pesquisa, setPesquisa] = useState('')

    const filtrarCursos = cursos.filter((item) => {
        return item.titulo.toLowerCase().includes(pesquisa.toLowerCase())
    })

    const renderizarListaDeCursos = filtrarCursos.map((item) => {
        return <div className='col col-lg-3 col-md-4 col-12 p-2'>
            <CardCurso imagem={item.imagem} titulo={item.titulo} link={item.link} progresso={item.progresso} logado={logado} curso={item} />
        </div>
    })

    return (
        /* template */
        <div className='container'>Lista de Cursos
            <div className='row'>
                <div className='col bg-danger pt-2 pb-2 mb-3'>
                    <input type="text" placeholder='Pesquisar curso' onChange={(e) => setPesquisa(e.target.value)} className='text-center' />
                </div>
            </div>
            <div className='row'>
                {renderizarListaDeCursos}
            </div>
        </div>
    )
}
