import React, { useContext } from 'react';
import Context from '../context/Context';

function Main () {
  const { data } = useContext(Context);
  console.log(data);
  return (
    <h1>Mova</h1>
  )
}

export default Main;