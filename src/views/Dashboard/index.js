import React from 'react'
import './style.css'
import ListaDeCursos from '../../components/ListaDeCursos'

export default function Dashboard() {
    return (
        <div>Dashboard
            <ListaDeCursos logado={true} />
        </div>
    )
}
