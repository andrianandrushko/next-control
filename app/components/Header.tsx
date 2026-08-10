import React from 'react';
import Image from "next/image";
import Menu from "@/app/menu/Menu";

const Header = () => {
    return (
            <header className='base-header'>
                <Image src='/film.gif' alt="film"  width={32} height={32} className={'film-info'}/>
                <h2 className="logo">MovieApp</h2>
                <Menu />
            </header>
    );
};

export default Header;