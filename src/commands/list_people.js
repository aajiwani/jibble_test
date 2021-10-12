const {Command, flags} = require('@oclif/command')

class ListPeopleCommand extends Command {
  async run() {
    const {flags} = this.parse(ListPeopleCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/amiralijiwani/backyard/jibble_test/src/commands/list_people.js`)
  }
}

ListPeopleCommand.description = `Lists people using public OData API
...
Using public OData API, lists available people information on it
`

ListPeopleCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ListPeopleCommand
