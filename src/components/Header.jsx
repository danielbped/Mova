import React from 'react';
import { Link } from 'react-router-dom';
import MovaSVG from '../SVG/footer_mova.svg'
import ArrowBack from '../SVG/arrow_back.svg';

function Header () {
  return (
    <header
      className="
        flex
        justify-between
        color: bg-gray-200
        shadow-md"
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
        <div>
          <Link to="/">
            <button
              className="
                flex
                m-5
                p-2
                pr-2
                border
                border-4
                border-purple-500
                focus:outline-none
                text-purple-500"
              type="button"
            >
              <img className="w-5 mx-2 self-center text-purple-500" src={ ArrowBack } alt="back" />
              Voltar
            </button>
          </Link>
        </div>
    </header>
  )
}

export default Header;