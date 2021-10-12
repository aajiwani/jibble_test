const {Command, flags} = require('@oclif/command');
const {cli} = require('cli-ux');
const axios = require('axios');
const { LIST_PEOPLE } = require('../const/odata_api');

class ListPeopleCommand extends Command {
  static flags = {
    ...cli.table.flags()
  };

  async run() {
    const {flags} = this.parse(ListPeopleCommand);
    const count = flags.count || 0;

    try {
      const {data: odata_response} = await axios.get(LIST_PEOPLE(count));

      cli.table(odata_response.value, {
        fullname: {
          get: row => `${row.FirstName} ${row.LastName}`,
          header: "Fullname"
        },
        UserName: {
          minWidth: 7,
        },
        Gender: {
          minWidth: 6,
        },
      }, {
        printLine: this.log,
        ...flags, // parsed flags
      });
    }
    catch (e) {
      this.log(e);
      this.log(`Unable to fetch the list of people -- See if your internet is working appropriately`);
    }
  }
}

ListPeopleCommand.description = `Lists people using public OData API
...
Using public OData API, lists available people information on it
`

ListPeopleCommand.flags = {
  count: flags.string({char: 'c', description: 'count of result rows from the top'}),
}

module.exports = ListPeopleCommand
