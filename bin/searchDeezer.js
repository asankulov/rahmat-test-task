#!/usr/bin/env node

const yargs = require("yargs");
const ora = require('ora');
const {searchForCLI} = require("../helpers");

const options = yargs
  .usage("Usage: -q <query>")
  .option("q", { alias: "query", describe: "Your query", type: "string", demandOption: true })
  .argv;

const spinner = ora('Searching for songs').start();

searchForCLI(options.q)
  .then(response => {
    if (response.total === 0) {
      spinner.fail("No records found.")
    }
    else {
      spinner.succeed("Here the results.");
      console.log(response.data.map(song => `${song.title_short} - ${song.link}`).join("\n"));
    }
  })
  .catch(e => {
    spinner.fail("Something went wrong.")
  });
