import React from 'react'
import Link from 'next/link'
import SlideArtista from '../components/Slide/slideArstista'
import SectionArtistas from '../components/Artistas/sectionArtistas'

const Artista = () => {
    return (
        <div>
            <SlideArtista />
            <div>
                <SectionArtistas />
            </div>
        </div>
    )
}
export default Artista