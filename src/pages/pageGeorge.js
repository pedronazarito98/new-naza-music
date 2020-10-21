import React from 'react'
import CardMusic from '../components/Artistas/cardsMusic'

const SectionGeorge = () => {
    return(
        <React.Fragment>
            <div className='w984 overflowFix '>
                <div className='h40'></div>
                    <h1 className='upper'>
                        <div className='left'> George Arrunateghi </div>
                            <a className='icon' href='#/'> <img src='./instagram-icon.png' alt='' /> </a>
                            <a  className='icon' href='#/'> <img src='./spotify_icon.png' alt='' /> </a>
                            <a className='icon'  href='#/news'> <img src='./FB_icon.png' alt='' /> </a>
                            <a  className='icon' href='#/'> <img src='./youtube_icon.png' alt='' /> </a>
                        <div className='clear'></div>
                    </h1>
                    <div>
                        <CardMusic />
                    </div>

                    <div className='release'>
                        <hr />
                        <h4> George Arrunateghi </h4>
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
export default SectionGeorge