import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import umas from '../assets/TerumiCharacterData.json'


//console.log(umas)

const Relleno = () => {
  const [resultado, setResultado] = useState([]);
  const [rareza, setRareza] = useState(null);
  const [uma, setUma] = useState(null);
  const estilosRareza = {
  1: 'border-gray-600',
  2: 'border-yellow-400 shadow-[0_0_10px_#facc15]',
  3: 'border-purple-500 shadow-[0_0_20px_#a855f7]',
  };

  const obtenerRareza = () => {
    const numero = Math.random() * 100;
    if (numero < 79) return 1;
    if (numero < 97) return 2;
    return 3;
  };

  const obtenerUma = () => {
    const rareza = obtenerRareza();

    const posibles = umas.filter(
      (uma) => uma.rarity === rareza
    );

    const indice = Math.floor(Math.random() * posibles.length);

    return posibles[indice];
  };



  const tirarGacha = () => {
    const result = []
    const uma = obtenerUma();
    result.push(uma)
    setResultado(result);
  };

  const tirarMulti = () => {
    const results = []
  for (let i = 0; i < 10; i++) {
      const uma = obtenerUma();
      results.push(uma);
  }
  setResultado(results);
  };


  return (
    <div className='mt-15'>
      <div className='text-white flex flex-col items-center'>
        <div className='flex flex-row'>
        <button className='border rounded-2xl p-4 mb-4 mr-1 w-[77px]' onClick={tirarGacha}>
          Single
        </button>
        <button className='border rounded-2xl p-4 mb-4 ml-1 w-[77px]' onClick={tirarMulti}>
          Multi
        </button>
        </div>
        <div className='flex flex-row w-[60%] flex-wrap content-evenly justify-center'>
          {resultado.map((uma, i) => (
            <div key={`${uma.cardId}-${i}`} className={`flex items-center bg-[#121212] flex-col w-[200px] border-2 rounded-2xl mt-2 mr-1 ml-1 ${estilosRareza[uma.rarity] ?? 'border-gray-600'}`}>
              <img src={uma.image} className='border-b border-gray-600'></img>
              <h2>{uma.charaName}</h2>
              <h3>{uma.cardTitle}</h3>
              <p>Rareza: {"⭐".repeat(uma.rarity)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relleno;