import React from 'react'
import CardMusic from '../Artistas/cardsMusic'
import Container from 'react-bootstrap/Container'

const SectionArtistas = () => {
    return(
        <React.Fragment>
            <div className='w984 overflowFix '>
                <div className='h40'></div>
                    <h1 className='upper'>
                        <div className='left'> Fonseec </div>
                            <a className='icon' href='#'> <img src='./instagram-icon.png' /> </a>
                            <a  className='icon' href='#'> <img src='./spotify_icon.png' /> </a>
                            <a className='icon'  href='#'> <img src='./FB_icon.png' />
                            </a>
                            <a  className='icon' href='#'> <img src='./youtube_icon.png' /> </a>
                        <div className='clear'></div>
                    </h1>
                    <div>
                        <CardMusic />
                    </div>

                    <div className='release'>
                        <hr />
                        <h4>Fonseec</h4>
                        <div className='textoregular'>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem sIpsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged.
                            </span>
                            <p>
                                <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged.
                                </span>
                            </p>
                        </div>
                        <hr className='linha' />
                    </div>
            </div>
            </React.Fragment>
    )
}
export default SectionArtistas