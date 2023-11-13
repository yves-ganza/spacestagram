# SpaceStagram

## How I worked on this project
My goal was to complete Shopify's Front End Developer Intern Challenge - Winter 2022
- I built this app based on the requirements of the challenge
- Responsive CSS using Tailwindcss: https://tailwindcss.com
- Image optimization using Nextjs's Image component: https://nextjs.org/docs/api-reference/next/image
- The application fetches data from the NASA API: https://apod.nasa.gov/apod/astropix.html

## Why I built the project this way
- I didn't use a state management library like Redux on purpose. For this app simple `useState` is
sufficient. 
- Shopify Polaris is a great library for react components that provides seamless interactivity.
- Emotion is a great library for styling, it provides a powerful style composition and  a great developer experience with features like source maps, labels, styled components ...
- My plan is to become a full-stack developer eventually. But for the beginning I focus on the
frontend. That's why I decided to use an existing API rather to create a custom server. I have
basic backend knowledge as well.

## If I had more time I would add this
- Set up tests
- Save likes if the user leaves or reloads the page
- Animate the “like” action (might we suggest a heart?)
- Add a loading state while we wait for NASA’s API to return data
- Create shareable links for each image
- Add a date-picker to be able to browse photos starting from a specific date

## Available Scripts
```
npm start
```
