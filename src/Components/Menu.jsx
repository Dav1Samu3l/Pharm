import React, { useState } from 'react';
import "./Menu.css";
import { Link } from 'react-router-dom';
import { FaStoreAlt, FaWpforms } from 'react-icons/fa';
import { IoMdMedical, IoMdLogOut } from 'react-icons/io';


const FixedMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="menu-container">
                <button className="menu-toggle" onClick={handleMenuToggle}>
                    {menuOpen ? '✕' : '☰'}
                </button>
                <ul className={`menu-links ${menuOpen ? 'menu-open' : ''}`}>
                    <li className="menu-link">
                        <Link to="/Lojas" onClick={handleLinkClick}> <FaStoreAlt />  Lojas</Link>
                    </li>
                    <li className="menu-link">
                        <Link to="/Medicamentos" onClick={handleLinkClick}> <IoMdMedical />  Medicamentos</Link>
                    </li>
                    <li className="menu-link">
                        <Link to="/Cadastro-de-lojas" onClick={handleLinkClick}> <FaWpforms />  Cadastro de lojas</Link>
                    </li>
                    <li className="menu-link">
                        <Link to="/Cadastro-de-medicamentos" onClick={handleLinkClick}> <FaWpforms />  Cadastro de medicamentos</Link>
                    </li>
                    <li className="menu-link">
                        <Link to="/sair" onClick={handleLinkClick}><IoMdLogOut />  Sair</Link>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default FixedMenu;
