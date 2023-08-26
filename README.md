Challenge Mercado Libre frontend hecho con Next, Typescript y Styled Components

## Getting Started
1. Clonar el repo
2. Correr `npm i` para instalar todas las dependencias necesarias
3. Correr el servidor:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
4. Abrir [http://localhost:3000](http://localhost:3000) en el browser para ver el resultado

## Qué hice?

- Hice una aplicación FullStack generando el servidor(back) y consumiendo la data del mismo desde el cliente (front). Es enteramente hecho desde Next.js utilizando Javascript.
- La aplicación esta pensada para que sea lo más accesible y escalable posible.
- Consta de 3 vistas: Home, Lista de productos y descripción del item elegido
- Decidí en esta ocasión no utilizar un store management, tales como Recoil, Redux o useContext API,  debido al tamaño de la aplicación. Por lo que, para el manejo de data entre vistas decidí utilizar la data de las queries.
- Me enfoqué en la accesibilidad de la aplicación y en la reutilización de components. La aplicación cuenta con una estructura semántica lógica, aria-labels y announcements para usuarios que utlizan screen readers. Estos announcements se encuentran en textos dinámicos, tales como alertas para avisar que no se encontraron productos, cuántos productos se encontraron y el loading.

## Para complementar
- Agregar tests con React Testing Library
- Agregar i18n para menajar la internalización de los textos
- Implementar un pequeño store management

