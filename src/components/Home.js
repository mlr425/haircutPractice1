import React from 'react'
import '../css/App.css'
import HeroSection from './HeroSection'
import RowArea from './RowArea'

import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
        <HeroSection></HeroSection>
        <RowArea></RowArea>
        <Footer></Footer>
        </>
    )
}
