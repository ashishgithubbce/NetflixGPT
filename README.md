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
   3. Login signin/signup page
      --- redirect to browse page

   4. Netflix gpt
      -- search bar
      -- movie suggestion
      =======

4. Routing setup
5. login form ->sign in /sign up
6. form validation : can use formic library
