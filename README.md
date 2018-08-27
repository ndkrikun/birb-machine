# Birb machine game

## Requirements

You will need to have `10.x` node.js version to run this project

## Development server

Run `ng run dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Features to add & improve

- add components for 'start' and 'end' game stages (start button, results table)
- add table component for balance history with additional info (fees, etc.)
- add sounds for positive / negative shuffle results
- rewrite machine button debounce with transitionEnd && soundPlayEnd handlers subscription
- add animations between game stages
- write e2e tests
- cover all components with tests (spyOn action dispatching)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
