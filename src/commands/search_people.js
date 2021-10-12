const {Command, flags} = require('@oclif/command');
const {cli} = require('cli-ux');
const axios = require('axios');
const { SEARCH_PEOPLE } = require('../const/odata_api');

// Reference API
// https://services.odata.org/TripPinRESTierService/People?$filter=FirstName eq 'Scott' or FirstName eq 'Russell'


class SearchPeopleCommand extends Command {
  static flags = {
    ...cli.table.flags()
  };

  async run() {
    const {flags} = this.parse(SearchPeopleCommand);
    const firstname = flags.firstname || null;

    try {
      // TODO: To make the filters dynamic
      const URL = (firstname !== null) ? `${SEARCH_PEOPLE}?$filter=FirstName eq '${firstname}'` : SEARCH_PEOPLE;
      const {data: odata_response} = await axios.get(URL);

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

SearchPeopleCommand.description = `Searches people using public OData API
...
Using public OData API, searches available people information on it
`

SearchPeopleCommand.flags = {
  firstname: flags.string({char: 'f', description: 'the firstname by which the people should be filtered'}),
}

module.exports = SearchPeopleCommand