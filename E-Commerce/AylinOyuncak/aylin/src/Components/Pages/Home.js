import React from 'react'
import HomeProductArea from '../HomeProductArea'
import Category from '../Category'
import Sldier from '../Sliders/HomeSldier'
export default function Home() {
    return (
        <div>
            <Sldier></Sldier>
            <Category></Category>
            <HomeProductArea></HomeProductArea>
        </div>
    )
}
