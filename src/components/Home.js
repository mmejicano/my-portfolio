import React from 'react'
import image from '../photo-bg.jpeg'
export default function Home() {
    return (
        <main>
            <img src={image} alt="Keyboard background" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-dark-100 font-bold cursive leading-none lg:leading-none home-name">Hi, I'm Marvin.</h1>
            </section>
        </main>
    )
}
