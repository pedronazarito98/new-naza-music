import React from 'react'

const SectionServicos = () => {
    return(
        <React.Fragment>
        <header className='SectionTitleServiços'>
            <h1>nossos serviços</h1>
            <hr className='linhaText'/>
        </header>
        <div className='ListaImagens'>
            <nav className='ListaImagens-container'>
                <div className='ListaImagens-Item'>
                    <a href='/servicos'>
                        <img src='som.p.png' alt='Distribuição' />
                        <h2>
                            <a href='/servicos'>Distribuição</a>
                        </h2>
                        <p>Get played, get paid - worldwide.</p>
                    </a>
                </div>
                <div className='ListaImagens-Item'>
                    <a href='/servicos'>
                        <img src='raio.p.png' alt='Distribuição' />
                        <h2>
                            <a href='/servicos'>Marketing</a>
                        </h2>
                        <p>Get played, get paid - worldwide. </p>
                    </a>
                </div>
                <div className='ListaImagens-Item'>
                    <a href='/servicos'>
                        <img src='mic.p.png' alt='Distribuição' />
                        <h2>
                            <a href='/servicos'>Produção Musical</a>
                        </h2>
                        <p>Get played, get paid - worldwide. </p>
                    </a>
                </div>
                <div className='ListaImagens-Item'>
                    <a href='/servicos'>
                        <img src='som.p.png' alt='Distribuição' />
                        <h2>
                            <a href='/servicos'>Gestão</a>
                        </h2>
                        <p>Get played, get paid - worldwide. </p>
                    </a>
                </div>
                <div className='ListaImagens-Item'>
                    <a href='/servicos'>
                        <img src='img-black.jpg' alt='Distribuição' />
                        <h2>
                            <a href='/servicos'>Licenciamento</a>
                        </h2>
                        <p>Get played, get paid - worldwide. </p>
                    </a>
                </div>
            </nav>
        </div>
        </React.Fragment>
    )
}

export default SectionServicos