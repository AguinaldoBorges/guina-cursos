import React from 'react'
import './style.css'
import FormPerfil from '../../components/FormPerfil'


export default function Perfil() {
    return (
        <div className='container-fluid' id='perfil'>
            <div className='row d-flex align-items-center' id='perfil-body'>
                <div className='col col-lg-6 col-md-5 col-12' id='perfil-image'></div>
                <div className='col col-lg-6 col-md-7 col-12'>
                    <FormPerfil />
                </div>
            </div>
        </div>
    )
}
