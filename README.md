# Welcome to Midas✨!

Midas is being built as a hobby project to allow users to integrate their banking and financial data to create readable monthly and yearly budgets. Midas will be FREE always and forever. NO PREMIUM FEATURES. Just ads.

## Some of the feature goals of the project include:

    1. A user should be able to integrate their financial institutions data(checking, savings, investment accounts, loans, debt, etc.) - probably via the Plaid API
    2. A user should be able to divide their monthly expenses into different sub categories and allocate a user defined percentage to each category as a goal for spending that month.
    3. Midas should recommend categories to try to cut back spending on.

    More features to come with more planning!

## Project Specs    

Midas is built using the Remix.js react framework.

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

Cypress is used for E2E testing and component testing.[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)

Supabase is used for Authentication and hosts a PostgreSQL database for [Supabase docs](https://supabase.com/docs)

## Development

Run the Express server with Vite dev middleware:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Express applications you should be right at home. Just make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
