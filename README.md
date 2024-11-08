<div align="center">
    <h2>🎉 About Me! 🎉</h2>
    <img src="https://shields.io/badge/React-18-61DAFB?logo=react&style=for-the-badge&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=000000"/> <img src="https://img.shields.io/badge/Sass-1.77-CC6699?style=for-the-badge&logo=sass&logoColor=CC6699"/> <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=7952B3"/>
    <br/>
    <a href="https://github.com/Zerohertz/about/actions/workflows/nextjs.yml">
        <img src="https://github.com/Zerohertz/about/actions/workflows/nextjs.yml/badge.svg"/>
    </a>
</div>

<details>
<summary align="center">
<h3>
🧑🏻‍🎨 나만의 about page 수정하는 방법! 🧑🏻‍🎨
</h3>
</summary>

> Page: 기본적으로 아래와 같은 구성을 가지며 `Profile`, `Introduction`, `Skills`를 제외한 나머지 component들은 `Common`을 통해 구현
> https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/pages/index.tsx#L19-L34

> Global: Meta data, analytics 등 전역 설정
> https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/global.ts#L6-L34

> Profile: 이름, 사진 및 관련 링크
> https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/profile.ts#L7-L49

> Introduction: 자기소개
> https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/introduction.ts#L3-L18

> Skills: 경험한 기술들
> https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/skills.ts#L4-L36
> https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/skills.ts#L166-L171

> Common: 다양하게 custom 가능한 항목들
> https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/payloads/experiences.ts#L3-L99

> Color: 주요한 색상 변경은 아래의 값들을 변경하여 설정
> https://github.com/Zerohertz/about/blob/89283eb6e61598a36cf36debe99d89c3f611a35e/src/styles/_colors.scss#L3-L6

</details>

<details align="center">
<summary>
<h3>
🧑🏻‍💻 나만의 about page 배포하는 방법! 🧑🏻‍💻
</h3>
</summary>

> ![step 1.](https://github.com/user-attachments/assets/1d40bc3f-c3f2-4968-9fb4-fce99fbd558e)
> 현재 repository를 fork한다. (최종적으로 배포되는 위치는 `${USERNAME}.github.io/${REPOSITORY_NAME}`)

> ![step 2.](https://github.com/user-attachments/assets/236b8bf6-7068-4a5c-a628-8ead2b90b3a8)
> GitHub Pages에 설정을 GitHub Actions로 바꾼다.

> ![step 3.](https://github.com/user-attachments/assets/d8aaa52b-6150-4904-b2df-8713dec36754)
> GitHub Actions를 허용하고 실행한다.

> ![step 4.](https://github.com/user-attachments/assets/742f63fc-845d-46fb-8b91-866f4b888764)
> 배포 끝!

</details>

---

- Original Repository: [uyu423/resume-nextjs](https://github.com/uyu423/resume-nextjs)
- Legacy Repository: [Zerohertz/about-v1](https://github.com/Zerohertz/about-v1)
