import React from 'react';
import {NavLink} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                     <NavLink 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-4 px-3 mr-4 text-blue-100 hover:text-blue-700 font-bold text-4xl cursive tracking-widest" 
                        to="/" exact>Marvin</NavLink>
                     <NavLink 
                        activeClassName="text-blue-100 bg-blue-700"
                        className="inline-flex items-center py-2 px-3 my-4 text-blue-200 hover:bg-blue-700" to="/post">Blog Post</NavLink>
                     <NavLink 
                        activeClassName="text-blue-100 bg-blue-700"
                        className="inline-flex items-center py-2 px-3 my-4 text-blue-200 hover:bg-blue-700" to="/project">Projects</NavLink>
                     <NavLink 
                        activeClassName="text-blue-100 bg-blue-700"
                        className="inline-flex items-center py-2 px-3 my-4 text-blue-200 hover:bg-blue-700" to="/about">About Me</NavLink>
                </nav>
                <div className="inline-flex py-2 px-3 my-4">
                    <SocialIcon url="https://twitter.com/MarvinMejicano" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    <SocialIcon url="https://github.com/mmejicano" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/marvin-mejicano-b525abb5" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}
