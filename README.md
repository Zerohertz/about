## Build

```bash
$ npm run build

> about@0.1.0 build
> next build

   ▲ Next.js 15.0.2

 ✓ Linting and checking validity of types
   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Collecting page data
 ✓ Generating static pages (3/3)
 ✓ Collecting build traces
 ⚠ Statically exporting a Next.js application via `next export` disables API routes and middleware.
This command is meant for static-only hosts, and is not necessary to make your application static.
Pages in your application without server-side data dependencies will be automatically statically exported by `next build`, including pages powered by `getSt
aticProps`.
Learn more: https://nextjs.org/docs/messages/api-routes-static-export
 ✓ Exporting (3/3)
 ✓ Finalizing page optimization

Route (pages)                             Size     First Load JS
┌ ○ /                                     5.16 kB         101 kB
├   └ css/4a98a97004894bc4.css            356 B
├   /_app                                 0 B            96.2 kB
├ ○ /404                                  189 B          96.4 kB
└ ƒ /api/hello                            0 B            96.2 kB
+ First Load JS shared by all             98.7 kB
  ├ chunks/framework-88d0cc4abe8a5763.js  57.3 kB
  ├ chunks/main-a1d270a8e303a46e.js       37.8 kB
  └ other shared chunks (total)           3.52 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

## Dev Logs

```bash
$ npx create-next-app about
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … No
✔ Would you like to use Turbopack for next dev? … Yes
✔ Would you like to customize the import alias (@/* by default)? … No
```
