#! /usr/bin/env node
const { program } = require("commander")
const repeat = require("./commands/repeat")
const reformat = require("./commands/reformat")

program
  .command("repeat <arg>")
  .description('INPUT: karelTest repeat "[1,2,3]" or 1,2,3')
  .action(repeat)

program
.command("reformat <arg>")
.description('INPUT: karelTest reformat "liMeSHArp DeveLoper TEST"')
.action(reformat)

program.parse()
