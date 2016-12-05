# Front-end-startup

This project should help front-end developers with simple tasks along the project.

## Dependencies

You must have [Node.js](https://nodejs.org/en/) and NPM.

## Instalation and use

Just clone and run `npm install` on your terminal. It will install all the dependencies.

To run it, type `gulp` and [Gulp](http://gulpjs.com/) will execute the default task.

## List of tasks

- less: Compile all [less](http://lesscss.org/) files on the src folder into a single css file optimized with [csso](https://github.com/css/csso).
- js: Concatenate and uglify all javascript files on the src and vendor folders into a single one. Pay attention on the vendor dependencies, it's a good idea manually write the dependencies on the order needed to avoid problems.
- server: Launch a [Browser Sync server](https://www.browsersync.io/) to desktop and mobile development. It will watch any changes on less, js and html files and reload the page.
