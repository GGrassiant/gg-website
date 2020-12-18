<h1 align="center">
  GG Website <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/ggrassiant/gg-website/GG%20Website%20CI">
</h1> 
This is my personal website repository.

## 🚀 Tech Stack

1.  **React with TypeScript**

1.  **Gatsby**

1.  **Gatsby-theme-i18n**

1.  **Styled-Components**

1.  **Eslint and Prettier with a Husky / Lint-staged hook**

1.  **Contentful CMS**

1.  **Heroku for hosting + Netlify for previews**

1.  **Jest / Enzyme / React-Testing-Library**
    
1.  **useSWR on the 404 page (playing around)**

## Note

a) When adding a route don't forget to edit:

- siteMetaData
- site.d.ts 
- fr.json and en.json with the route name and the SEO title for SEO/Meta

b) for the 404, I initially used Suspense but since Gatsby is a static site generator
and renders on the server at build time, Suspense not being currently supporter
on ssr (as of Dec 2020), I decided to check for data and return a Loader.
An alternative would be [this post on Stack Overflow](https://stackoverflow.com/questions/63066974/how-to-use-react-lazy-in-gatsby)

Also...there is an Easter egg for you to find ;)

## To Do's
See the [project's kanban](https://github.com/GGrassiant/gg-website/projects/1)

## Articles and resources I used so far:
- Josh Comeau: [Dark Mode](https://joshwcomeau.com/gatsby/dark-mode/) 
- [css variables styled components](https://ronvalstar.nl/react-styled-components-and-sass-less-variables)
- [aspect ratio in Gatsby](https://medium.com/swlh/art-direction-with-gatsby-image-the-aspect-ratio-bug-8281f7a8594c)
- [Global Style for Styled Components](https://scalablecss.com/styled-components-global-styles/)
- [Mixins in Styled Components](https://www.thegeekwing.com/technology/5-minutes-guide-to-styled-components-for-modular-components)
- [Hover on desktop only](https://stackoverflow.com/questions/8291517/disable-hover-effects-on-mobile-browsers)
- [Best API in the world](https://dog.ceo/dog-api/documentation/random)
- [SWR](https://swr.vercel.app/)
- [SWR data fetching](https://dev.to/dance2die/useswr-react-hooks-for-remote-data-fetching-1nlo)
- [SWR data fetching](https://dev.to/dance2die/useswr-react-hooks-for-remote-data-fetching-1nlo)
- [SWR Suspense Image Skeleton](https://medium.com/creditas-tech/react-suspense-swr-skeleton-e1979e9f32f0)
