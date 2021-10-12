const {Command, flags} = require('@oclif/command')

class SearchPeopleCommand extends Command {
  async run() {
    const {flags} = this.parse(SearchPeopleCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/amiralijiwani/backyard/jibble_test/src/commands/search_people.js`)
  }
}

SearchPeopleCommand.description = `Describe the command here
...
Extra documentation goes here
`

SearchPeopleCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SearchPeopleCommand