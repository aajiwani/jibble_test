const {Command, flags} = require('@oclif/command')

class ListPeopleCommand extends Command {
  async run() {
    const {flags} = this.parse(ListPeopleCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/amiralijiwani/backyard/jibble_test/src/commands/list_people.js`)
  }
}

ListPeopleCommand.description = `Describe the command here
...
Extra documentation goes here
`

ListPeopleCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ListPeopleCommand
