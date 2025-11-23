# EventApp - Proyecto de Práctica

Este proyecto es una aplicación web desarrollada con **React** y **Vite**, diseñada específicamente para practicar la integración de un Frontend con servicios de Backend.

## Descripción

El objetivo principal de esta aplicación es simular un entorno real de desarrollo donde el frontend consume datos de diferentes APIs. Para fines de práctica y desarrollo autónomo, se utiliza **MSW (Mock Service Worker)** para interceptar las peticiones de red y devolver datos simulados, permitiendo trabajar sin un backend real desplegado.

## Características Principales

- **Integración Frontend-Backend Simulada**:
  - **REST API**: Consumo de lista de eventos.
  - **GraphQL API**: Consumo de detalles específicos de cada evento.
  - **Simulación de Latencia**: Los servicios mockeados incluyen un retardo artificial para probar estados de carga (loading states).

- **Tecnologías Utilizadas**:
  - **React**: Biblioteca principal de UI.
  - **Vite**: Entorno de desarrollo y empaquetador.
  - **Tailwind CSS**: Estilizado moderno y responsivo (diseño "Glassmorphism").
  - **React Router**: Manejo de navegación y rutas.
  - **MSW (Mock Service Worker)**: Mocking de APIs a nivel de red.

## Instalación y Ejecución

1.  Clonar el repositorio.
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```
4.  Abrir `http://localhost:5173` en el navegador.

## Estructura del Proyecto

- `src/components`: Componentes reutilizables (Layout, etc.).
- `src/pages`: Vistas principales (Lista de Eventos, Detalle).
- `src/services`: Lógica de consumo de APIs (fetch).
- `src/mocks`: Configuración de MSW y handlers para simular respuestas.
