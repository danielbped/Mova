import React from 'react';
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
        <button
          className="
            flex
            m-5
            p-2
            pr-4
            border
            border-purple-500
            text-purple-500"
          type="button-"
          >
            <img className="w-5 mx-2 self-center text-purple-500" src={ ArrowBack } alt="back" />
            Voltar
        </button>
      </div>
    </header>
  )
}

export default Header;