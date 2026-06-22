# Skyless - E-commerce de Manillas Artesanales

Skyless es una aplicación web moderna orientada al comercio electrónico de manillas artesanales hechas a mano. Este proyecto nació como una propuesta a la necesidad de una aplicación web funcional para el comercio electrónico de la marca Skyless, para ello se creó este proyecto utilizando el ecosistema moderno de React.

## Tecnologias Utilizadas

- React
- Typescript
- Tailwind CSS

## Instalacion y Configuracion

1. **Clonar el Repositoio**

```bash
    git clone https://github.com/DanielLubo/Skyless-FrontEnd.git
    cd Skyless
```

2. **Instalar Dependencias**

```bash
    pnpm install
```

3. **Correr el Proyecto en local**
```bash
    pnpm dev
```

## Estructura del Proyecto
skyless/
├── public/
│   └── images/             # Imágenes estáticas de productos
│ 
├── src/
│   ├── assets/             # Fuentes, íconos SVG propios
│   │     
│   ├── components/         # Componentes GLOBALES
│   │   └── ui/             # Componentes base
│   │
│   ├── data/
│   │   └── products.json
│   │
│   ├── features/
│   │   ├── auth/            
│   │   ├── catalog/         
│   │   ├── product/         
│   │   ├── cart/            
│   │   ├── checkout/        
│   │   └── profile/         
│   │
│   ├── hooks/              # Custom hooks GLOBALES
│   │
│   ├── lib/                # Utilidades puras
│   │       
│   ├── router/             # Configuración de React Router
│   │   └── index.tsx
│   │
│   ├── store/              # Estado global
│   │
│   ├── types/              # Interfaces TypeScript globales: Product, User, 
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│   
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

## Estado Actual del Proyecto
(En desarrollo)

## Desarrollador
Daniel Felipe Lubo - Estudiante de Tecnologia en Desarrollo de Software - https://github.com/DanielLubo