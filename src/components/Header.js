import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (toggleMenu) {
                setToggleMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [toggleMenu]);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between px-5 py-2 bg-primary z-50 border-b-2 border-secondary">
            <a className="font-bold text-black" href="http://localhost:3001/#">Bharadwaj R</a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contacts</a></li>
                    </ul>
                </nav>
            )}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-white h-5" />
            </button>
        </header>
    );
}
