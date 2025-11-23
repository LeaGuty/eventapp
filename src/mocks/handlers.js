import { http, graphql, HttpResponse, delay } from 'msw';

const EVENTS = [
    {
        id: "1",
        title: "Cumbre de Innovación Tecnológica 2025",
        date: "2025-11-15",
        location: "Centro de Convenciones, Ciudad Tech",
        category: "Conferencia",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
        price: "$29.900",
    },
    {
        id: "2",
        title: "Festival de Música de Verano",
        date: "2025-12-01",
        location: "Parque Central, Nueva York",
        category: "Concierto",
        imageUrl: "https://images.unsplash.com/photo-1545684361-65ed79b47ea1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$15.000",
    },
    {
        id: "3",
        title: "Taller: El Futuro de la IA",
        date: "2025-11-20",
        location: "Hub de Innovación, San Francisco",
        category: "Taller",
        imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=2072",
        price: "$50.000",
    },
    {
        id: "4",
        title: "Exposición Global de Arte",
        date: "2025-12-10",
        location: "Museo de Arte Moderno, Londres",
        category: "Exposición",
        imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=2070",
        price: "$25.000",
    },
    {
        id: "5",
        title: "Noche de Pitch para Startups",
        date: "2025-11-25",
        location: "The Hive, Berlín",
        category: "Networking",
        imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2070",
        price: "Gratis",
    },
    {
        id: "6",
        title: "Noche de Jazz y Blues",
        date: "2025-12-05",
        location: "Blue Note, Chicago",
        category: "Concierto",
        imageUrl: "https://images.unsplash.com/photo-1641185867887-e8a0c79214b9?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$45.000",
    },
];

const EVENT_DETAILS = {
    "1": {
        description: "Únete a líderes de la industria e innovadores para un día de charlas perspicaces y networking. Explora las últimas tendencias en tecnología y cómo están moldeando nuestro futuro.",
        organizer: "TechWorld Inc.",
        attendees: 1200,
        time: "09:00 AM - 05:00 PM",
    },
    "2": {
        description: "Experimenta la vibra definitiva del verano con los mejores artistas de todo el mundo. Un día lleno de música, comida y diversión bajo el sol.",
        organizer: "Live Nation",
        attendees: 5000,
        time: "12:00 PM - 11:00 PM",
    },
    "3": {
        description: "Un taller práctico diseñado para desmitificar la Inteligencia Artificial. Aprende de expertos y construye tus propios modelos de IA.",
        organizer: "IA para Todos",
        attendees: 50,
        time: "10:00 AM - 02:00 PM",
    },
    "4": {
        description: "Sumérgete en el arte contemporáneo de artistas de renombre mundial. Esta exposición presenta piezas exclusivas nunca antes vistas.",
        organizer: "Museo de Arte Moderno",
        attendees: 800,
        time: "10:00 AM - 06:00 PM",
    },
    "5": {
        description: "Mira a startups prometedoras presentar sus ideas a un panel de inversores. Una gran oportunidad para hacer networking y ver la próxima gran novedad.",
        organizer: "Asoc. de Capitalistas de Riesgo",
        attendees: 150,
        time: "06:00 PM - 09:00 PM",
    },
    "6": {
        description: "Relájate y disfruta de una noche conmovedora de Jazz y Blues. Con actuaciones en vivo de leyendas locales e internacionales.",
        organizer: "Club de Jazz de Chicago",
        attendees: 200,
        time: "08:00 PM - 12:00 AM",
    },
};

export const handlers = [
    // REST Handler
    http.get('/api/events', async () => {
        await delay(1000);
        return HttpResponse.json(EVENTS);
    }),

    // GraphQL Handler
    graphql.query('GetEventDetails', async ({ variables }) => {
        await delay(1000);
        const { id } = variables;
        const details = EVENT_DETAILS[id];
        const event = EVENTS.find((e) => e.id === id);

        if (details && event) {
            return HttpResponse.json({
                data: {
                    event: {
                        ...event,
                        ...details,
                    },
                },
            });
        }

        return HttpResponse.json({
            errors: [{ message: 'Evento no encontrado' }],
        });
    }),
];
