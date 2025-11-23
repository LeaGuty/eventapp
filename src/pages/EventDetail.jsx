import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Building2, Clock } from 'lucide-react';
import { fetchEventDetails } from '../services/api';

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEventDetails = async () => {
            try {
                const response = await fetchEventDetails(id);
                setEvent(response.data.event);
            } catch (err) {
                setError("Event not found");
            } finally {
                setLoading(false);
            }
        };
        loadEventDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (error || !event) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-white mb-4">Evento no encontrado</h2>
                <button
                    onClick={() => navigate('/')}
                    className="text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver a Eventos
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Eventos
            </Link>

            <div className="bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
                <div className="h-64 md:h-96 relative">
                    <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-sm font-semibold mb-4 inline-block">
                            {event.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{event.title}</h1>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-4">Sobre el Evento</h2>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                {event.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="flex items-center gap-3 mb-2 text-indigo-400">
                                    <Building2 className="w-5 h-5" />
                                    <span className="font-semibold">Organizador</span>
                                </div>
                                <p className="text-slate-200">{event.organizer}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="flex items-center gap-3 mb-2 text-indigo-400">
                                    <Users className="w-5 h-5" />
                                    <span className="font-semibold">Asistentes</span>
                                </div>
                                <p className="text-slate-200">{event.attendees} confirmados</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                            <h3 className="text-lg font-semibold text-white mb-4">Detalles del Evento</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-indigo-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-400">Fecha</p>
                                        <p className="text-white font-medium">{new Date(event.date).toLocaleDateString('es-ES')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-indigo-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-400">Hora</p>
                                        <p className="text-white font-medium">{event.time}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-indigo-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-400">Ubicación</p>
                                        <p className="text-white font-medium">{event.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-indigo-500/20">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-slate-400">Precio</span>
                                    <span className="text-2xl font-bold text-white">{event.price}</span>
                                </div>
                                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/25">
                                    Comprar Entradas
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
