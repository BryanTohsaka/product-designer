import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 border-4 border-dashed border-yellow-400 rounded-lg p-10 max-w-md w-full text-center shadow-lg">
        <h1 className="text-yellow-400 text-9xl font-extrabold mb-4">404</h1>
        <h2 className="text-yellow-300 text-3xl font-semibold mb-2">Boleto inválido</h2>
        <p className="text-yellow-200 text-lg mb-6">Evento no encontrado</p>
        <div className="text-yellow-300 text-left mb-8 space-y-2">
          <p><span className="font-semibold">FECHA:</span> 31/02/2024</p>
          <p><span className="font-semibold">LUGAR:</span> Garage Central</p>
          <p><span className="font-semibold">SECTOR:</span> VIP Falso</p>
        </div>
        <Link
          to="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded transition"
        >
          Volver al Garage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
