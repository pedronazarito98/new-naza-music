import React from 'react'

const SectionHome = () =>{
    return(
        <React.Fragment>
        <section className='home'>
            <header className='section-indent text-center'>
                <h1 className='FirstTitle'>Naza Música em movimento</h1>
                <hr className='linhaTexto'/>
                <p className=' TextoCentral'>
                    A META DA NAZA MUSIC É MAXIMIZAR O POTENCIAL DE CADA CLIENTE 
                    E CONTRIBUIR PARA QUE O RETORNO DO TRABALHO SEJA LUCRATIVO.
                </p>
            </header>
            <div className='SectionTitle'>
                <h1>news</h1>
                <hr className='linhaText'/>
            </div>
        </section>
        </React.Fragment>
    )
}

export default SectionHome