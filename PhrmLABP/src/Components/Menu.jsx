import React, { useState } from 'react';
import  "./Menu.css";
import { Link } from 'react-router-dom';


const FixedMenu = ({ logo }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="menu-container">
            <button className="menu-toggle" onClick={handleMenuToggle}>
                {menuOpen ? '✕' : '☰'}
            </button>
            <ul className={`menu-links ${menuOpen ? 'menu-open' : ''}`}>
                <li className="menu-link">
                    <Link to="/Lojas" onClick={handleLinkClick}>Lojas</Link>
                </li>
                <li className="menu-link">
                    <Link to="/Medicamentos" onClick={handleLinkClick}>Medicamentos</Link>
                </li>
                <li className="menu-link">
                    <Link to="/Cadastro-de-lojas" onClick={handleLinkClick}>Cadastro de lojas</Link>
                </li>
                <li className="menu-link">
                    <Link to="/Cadastro-de-medicamentos" onClick={handleLinkClick}>Cadastro de medicamentos</Link>
                </li>
                <li className="menu-link">
                    <Link to="/sair" onClick={handleLinkClick}>Sair</Link>
                </li>
            </ul>
        </div>
    );
};

export default FixedMenu;
