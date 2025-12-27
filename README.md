# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

1. React app creation
   npm create vite@latest my-react-app
   cd my-react-app
   npm install
   npm run dev

nvm install 22 --- to install node 22
nvm use 22 --- to use /switch to use 22

->Vite does not use Webpack. It uses esbuild during development and Rollup for production builds.

---

Why esbuild is much faster
Written in Go (compiled)
Uses parallel processing
No heavy plugin pipeline
Optimized parsing & transformation or Bundler(many files to few files) + transformer(transpiler)
->CRA comes with built-in Jest testing, while Vite requires you to install a testing framework like Vitest for unit tests.”

2. Tailwind setup

3. Features:
   Browse :
   1. Header
      2.main movie/popular movie
      --bg movie image
      -- movie name & desc
      -- play btn, more info
   2. Movie suggestion based on category
      -- Movie list\*N
      --Each list --horizontally scrollable
4. Login signin/signup page
   --- redirect to browse page

5. Netflix gpt
   -- search bar
   -- movie suggestion
