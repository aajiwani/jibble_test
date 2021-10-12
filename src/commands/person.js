const {Command, flags} = require('@oclif/command')

class PersonCommand extends Command {
  async run() {
    const {flags} = this.parse(PersonCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/amiralijiwani/backyard/jibble_test/src/commands/person.js`)
  }
}

PersonCommand.description = `Searches and lists a person using its identifier over public OData API
...
Using public OData API, tries to search an individual and list the attributes associated with him/her
`

PersonCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PersonCommand
