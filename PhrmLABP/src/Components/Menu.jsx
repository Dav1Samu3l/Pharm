import React, { useState } from 'react';
import  "./Menu.css";
import { Link } from 'react-router-dom';


const FixedMenu = ({ logo }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    return (
        <div className="menu-container">
            <button className="menu-toggle" onClick={handleMenuToggle}>
                {menuOpen ? '✕' : '☰'}
            </button>
            <ul className={`menu-links ${menuOpen ? 'menu-open' : ''}`}>
                <li className="menu-link">
                    <Link  to="/Lojas">Lojas</Link>
                </li>
                <li className="menu-link">
                    <Link  to="/Medicamentos">Medicamentos</Link>
                </li>
                <li className="menu-link">
                    <Link  to="/Cadastro-de-lojas">Cadastro de lojas</Link>
                </li>
                <li className="menu-link">
                    <Link  to="/Cadastro-de-medicamentos">Cadastro de medicamentos</Link>
                </li>
                <li className="menu-link">
                    <Link  to="/sair">Sair</Link>
                </li>
            </ul>
        </div>
    );
};

export default FixedMenu;