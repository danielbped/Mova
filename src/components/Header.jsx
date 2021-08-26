import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MovaSVG from '../SVG/footer_mova.svg'
import ArrowBack from '../SVG/arrow_back.svg';

function Header () {
  return (
    <header
      className="
        flex
        justify-between
        color: bg-gray-200
        shadow-xl"
      >
      <div>
        <img
          className="
            w-14
            m-5"
          src={ MovaSVG }
          alt="Mova"
        />
      </div>
      {
        useLocation().pathname.includes('/countries/') ?
        <div>
          <Link style={{ textDecoration: 'none' }} to="/">
            <button
              className="
                flex
                m-5
                p-2
                pr-2
                border
                border-8
                border-purple-800
                font-bold
                no-underline
                text-purple-800
                focus:outline-none
                hover:opacity-80 duration-500"
              type="button"
            >
              <img className="w-5 mx-2 self-center text-purple-800" src={ ArrowBack } alt="back" />
              Voltar
            </button>
          </Link>
        </div> : null
      }
    </header>
  )
}

export default Header;