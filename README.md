<div align="center">
    <h2>🎉 About Me! 🎉</h2>
    <img src="https://shields.io/badge/React-18-61DAFB?logo=react&style=for-the-badge&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=000000"/> <img src="https://img.shields.io/badge/Sass-1.77-CC6699?style=for-the-badge&logo=sass&logoColor=CC6699"/> <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=7952B3"/>
    <br/>
    <a href="https://github.com/Zerohertz/about/actions/workflows/nextjs.yml">
        <img src="https://github.com/Zerohertz/about/actions/workflows/nextjs.yml/badge.svg"/>
    </a>
</div>

> [!NOTE]
>
> ```bash
> # Install project dependencies
> $ npm install
> added 3 packages, and audited 347 packages in 1s
> 129 packages are looking for funding
>   run `npm fund` for details
> found 0 vulnerabilities
>
> # Run ESLint to check and automatically fix linting issues
> $ npx next lint --fix
> ✔ No ESLint warnings or errors
>
> # Build the project for production
> $ npx next build
>    ▲ Next.js 15.0.3
>  ✓ Linting and checking validity of types
>    Creating an optimized production build ...
>  ✓ Compiled successfully
>  ✓ Collecting page data
>  ✓ Generating static pages (3/3)
>  ✓ Collecting build traces
>  ✓ Exporting (3/3)
>  ✓ Finalizing page optimization
> Route (pages)                             Size     First Load JS
> ┌ ○ /                                     71.9 kB         154 kB
> ├   └ css/dd0fb6a5e3482504.css            360 B
> ├   /_app                                 0 B            82.5 kB
> └ ○ /404                                  189 B          82.7 kB
> + First Load JS shared by all             113 kB
>   ├ chunks/framework-a6b3d2fb26bce5d1.js  44.8 kB
>   ├ chunks/main-2fb7f6c0f1a1dc8d.js       33.2 kB
>   ├ css/c46f95bc3df4fa4f.css              30.6 kB
>   └ other shared chunks (total)           4.48 kB
> ○  (Static)  prerendered as static content
>
> # Start the Next.js development server on the specified port
> $ npx next dev -p ${PORT}
>    ▲ Next.js 15.0.3
>    - Local:        http://localhost:${PORT}
>  ✓ Starting...
>  ✓ Ready in 1149ms
>  ○ Compiling / ...
>  ✓ Compiled / in 5.3s (634 modules)
>  GET / 200 in 5566ms
> ```

<details>
<summary align="center">
<h3>
🧑🏻‍🎨 How to Customize About Page! 🧑🏻‍🎨
</h3>
</summary>

<h4 align="center">Theme</h4>

> To change the primary colors, adjust the values in the following file:
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/styles/_colors.scss#L3-L6>

<!-- prettier-ignore -->
> Update the font settings in the following files:<br/>
> [`src/assets/fonts`](https://github.com/Zerohertz/about/tree/main/src/assets/fonts)
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/styles/fonts.ts#L3-L18>
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/pages/index.tsx#L21>

<h4 align="center">Layout</h4>

> In the code below, you can configure the layout for the entire about page.
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/pages/index.tsx#L19-L34>

<h4 align="center">Information</h4>

> Global
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/global.ts#L6-L34>

> Profile
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/profile.ts#L7-L49>

> Introduction
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/introduction.ts#L3-L18>

<!-- prettier-ignore -->
> Skills
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/skills.ts#L4-L36>
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/skills.ts#L166-L171>

> Common
> <https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/experiences.ts#L3-L99>

</details>

<details align="center">
<summary>
<h3>
🧑🏻‍💻 How to Deploy About Page? 🧑🏻‍💻
</h3>
</summary>

> ![step 1.](https://github.com/user-attachments/assets/1d40bc3f-c3f2-4968-9fb4-fce99fbd558e)
> Fork the current repository. (The final deployed location will be `${USERNAME}.github.io/${REPOSITORY_NAME}`)

> ![step 2.](https://github.com/user-attachments/assets/236b8bf6-7068-4a5c-a628-8ead2b90b3a8)
> Change the GitHub Pages setting to use GitHub Actions.

> ![step 3.](https://github.com/user-attachments/assets/d8aaa52b-6150-4904-b2df-8713dec36754)
> Allow and run GitHub Actions.

> ![step 4.](https://github.com/user-attachments/assets/742f63fc-845d-46fb-8b91-866f4b888764)
> Deployment complete!

</details>

---

- Original Repository: [uyu423/resume-nextjs](https://github.com/uyu423/resume-nextjs)
- Legacy Repository: [Zerohertz/about-v1](https://github.com/Zerohertz/about-v1)
