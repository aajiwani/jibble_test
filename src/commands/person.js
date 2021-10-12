const {Command, flags} = require('@oclif/command')

class PersonCommand extends Command {
  async run() {
    const {flags} = this.parse(PersonCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/amiralijiwani/backyard/jibble_test/src/commands/person.js`)
  }
}

PersonCommand.description = `Describe the command here
...
Extra documentation goes here
`

PersonCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PersonCommand
