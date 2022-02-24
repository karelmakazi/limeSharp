#! /usr/bin/env node
const { program } = require("commander")
const repeat = require("./commands/repeat")

program
  .command("repeat <arg>")
  .description('INPUT: karelTest repeat "[1,2,3]" or 1,2,3')
  .action(repeat)

program.parse()
