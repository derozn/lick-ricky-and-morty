

# Lick - Rick and Morty Tech Test

> To view a live demo please go to https://lick-ricky-and-morty.vercel.app/

# Build status
[![CircleCI](https://circleci.com/gh/derozn/lick-ricky-and-morty/tree/main.svg?style=svg)](https://circleci.com/gh/derozn/lick-ricky-and-morty/tree/main)

## Technical stack
- NextJS
- Jest, React Testing Library & TS-Jest
- ESLint & Prettier
- Styled-Components
- Typescript
- Husky
- Lint staged
- React

## Local setup
Install yo' dependencies
```bash
$ npm i
```

Run the application
```bash
$ npm run dev
```

Lastly, open http://localhost:3000/ in your favourite browser and see the magic!

## So, what's been done?
To satisfy the technical task of retrieving all *alive* Rick characters *and* allow for a link through to a page to get more information on a character two endpoints were created:

### Linting
The project has been setup to use ESLint and Prettier with airbnb being the style choice. This is used industry wide and has some nice rules. 


### API
**/api/characters**
---
This endpoint accepts two query params; name and status (If they are not set, then they will default to name: rick and status: alive). A simple API request is made to *rickandmortyapi.com* with the given query parameters and formats the data according to the *LickApi.ICharacterCore* type. 

**/api/character/[id]**
---
This endpoint accepts one path param; id (id of the character). A simple API request is made to *rickandmortyapi.com* with the given id of the character and makes subsequent calls to retrieve the characters episode and location data. The data is then passed through a formatter and formatted according to the *LickApi.ICharacter* type.

**Extending the API Types**
---
An additional rick-and-morty.d.ts has been added so the third party responses can be typed.

### FE
The Homepage UI has followed the wireframes as much as possible, it utilises a flexbox grid and character card component with link through to their respected pages.

As a fun little side task, if you visit https://lick-ricky-and-morty.vercel.app/morty you'll also see all alive mortys!

The character page has slightly deviated from the initial wireframes as time was short, but it does display all the needed data.

I leveraged CSS Variables as much as possible for max reusability of common variables.

### Path Aliases
With TS being awesome path aliases have been added to the project under the `@/` namespace. There is absolutely no real reason behind why that the namespace was chosen but I tend to use it in most of my projects. To ensure eslint / jest can also make use of this `ts-jest` and `eslint-import-resolver-typescript` have been added to resolve the aliases.

### Testing
All UI components have been tested (not the routes though). I typically don't like doing snapshot testing which is why you won't see that here.

## CircleCI
A circleCI config has been added to both build and test the application.

## Husky
Good practice when committing / pushing code to a repository is that code should be in the best state as possible which is why husky was chosen. Two git-hooks have been added; pre-commit and pre-push. Pre-commit is a light weight hook which will run linting only. Pre-push is a tad more strict with both testing and typechecking being run.

## What would I improve?
I'm a big fan of using POSTMAN for locally (and perhaps low environments / staging) testing the application. If I had more time I'd write some POSTMAN snippets which can be shared around to allow for consistent testing between collaborators.

You'll notice that the homepage / Morty page only shows a *few* results. This is because the rick and morty API uses pagination. If I had more time I'd implement pagination / lazy load on the FE / BE by requesting more data when a user scrolls to a threshold towards the bottom of the page.

Big fan of logging and nice error messages when an error occurs. Typically I'd use http-errors (https://www.npmjs.com/package/http-errors) and 
use something like http-errors to keep consistent error messages when responding from an API request. Sentry / new relic are also good logging options for the FE.

Integration tests / E2E would be a lovely addition in testing the custom API endpoints. The use of Cypress IO would be my choice of E2E framework with its easy API and integration with RTL!

I'd implement / use a design system keeping inline with the atomic design approach taken in this app.

Caching. Depending on the amount of data that needs storing you could go down the route of using redis or a good ol' key/value store (This isn't great if you use lambdas though!) On the FE a simple store (perhaps recoil.js https://recoiljs.org/) would be used to prevent API calls being remade for pages that have all ready been loaded.

Get some movement in! Framer-motion is my absolute favourite animation library (and before that, popmotion =)) Simple, elegant transitions can really make the website "pop". Seeing as Rick & Morty is my favourite Animated show it deserves it!

I'd also like to have a more CI/CD input. Having the project tested, built and pushed to various environments before production would be great.

As atomic design is used here, I would of loved to have added story book! Story book is a real nice way to showcase components in an isolated state. Particularly handy with a design system.