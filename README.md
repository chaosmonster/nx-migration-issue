# Demo Repository for a failing Nx migration

This is a minimal reproducible repository to show an issue with a migration of Nx.

After running `npm install` the minimal repo works as currently intended (before the migration). 
You can read about this under section Before Migration.

The migration check out section Migration.

_Comment:_
_The migration fails but with some minor tweaks in various config files the basic Nx commands can be made runnable._
_The question is, what is the migration missing due to the fails?_

_With some effort the following tasks can be made runnable_

1. run `npx nx serve app-portal`
2. run `npx nx test app-portal`
3. run `npx nx test lib-ui`
4. run `npx nx test lib-api`
5. run `npx nx lint app-portal`
6. run `npx nx lint lib-ui`


## Before Migration
The following scripts run as intended.
### Start application
To start the application you have to run the following three npm scripts simultaneously


- `npm run lib:api:dev` to build and watch the (auto-generated) api library
- `npm run lib:ui:dev` to build and watch the ui library
- `npm run app:portal:dev` to run the actual application

### Lint application
To lint the application you can run
`npm run lint:code` - which also fixes lint issues

### Test application
To run test use
`npm run test:build` (currently this only starts the tests no actual tests included in this repo). This requires Chrome for Karma

## Migration

command to run the migration is as follows
`npx nx@latest init --integrated` I use "skip for now" for the caching question

### Errors of migration

One error is around the handlebar files in lib-api I assume prettier based on the error messages. But the `.prettierignore` file is excluding them.

