import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                            <CalendarDays className="w-6 h-6 text-indigo-400" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                            EventHorizon
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                            Explorar
                        </Link>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all shadow-lg shadow-indigo-500/20">
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 pb-12 container mx-auto px-4 min-h-[calc(100vh-80px)]">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-slate-950 py-8">
                <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} EventHorizon. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
