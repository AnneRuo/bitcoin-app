# Vincit Rising Star Pre-assignment

### Bitcoin App

A React application to analyze bitcoin's market value for a date range given by the user. Application uses CoinGecko’s public API.

## Project Status

This project is currently in development.

User can get data for a given date range but the application does not yet take into account that the data comes more than once a day if the date range is less than 91 days. This leads to the wrong amount of days regarding the longest bearish (downward) trend if date range is not over 90 days.

Otherwise the application is ready and easily extensible when new features are to be added.

## Live Application URL

This URL has the application deployed in.


## Cloning and Running the Application in local

You will need `node` and `npm` installed globally on your machine.

Clone the project into local

`git clone https://github.com/AnneRuo/bitcoin-app.git`

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

`cd bitcoin-app`
`npm install`

In order to run the application type the following command

`npm start`

The application runs on **localhost:3000**