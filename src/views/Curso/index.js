import React from 'react'
import './style.css'
import SalaDeAula from '../../components/SalaDeAula'

export default function Curso({ curso }) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    Curso
                    <SalaDeAula curso={curso} />
                </div>
            </div>
        </div>
    )
}
