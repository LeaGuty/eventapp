import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-6xl font-bold text-indigo-500 mb-4">404</h1>
            <p className="text-xl text-slate-300 mb-8">Página no encontrada</p>
            <Link to="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                Ir al Inicio
            </Link>
        </div>
    );
};

export default NotFound;
