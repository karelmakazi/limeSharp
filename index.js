#! /usr/bin/env node
const { program } = require("commander")
const repeat = require("./commands/repeat")
const reformat = require("./commands/reformat")
const next_binary_number = require("./commands/next_binary_number")


program
  .command("repeat <arg>")
  .description('INPUT: karelTest repeat "[1,2,3]" or 1,2,3')
  .action(repeat)

program
.command("reformat <arg>")
.description('INPUT: karelTest reformat "liMeSHArp DeveLoper TEST"')
.action(reformat)

program
  .command("next_binary_number <arg>")
  .description('INPUT: karelTest next_binary_number "[0,0,0,1]" or 0,0,0,1')
  .action(next_binary_number)

program.parse()
