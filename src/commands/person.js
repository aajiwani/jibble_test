const {Command, flags} = require('@oclif/command');
const axios = require('axios');
const { SEARCH_PERSON } = require('../const/odata_api');

class PersonCommand extends Command {
  async run() {
    const {flags} = this.parse(PersonCommand)
    const username = flags.username || null;

    // TODO: Add more ability to search via different parameters

    if (username === null) {
      this.log('Username must be filled to begin the activity of searching a person');
      return;
    }

    try {
      const {data: odata_response} = await axios.get(SEARCH_PERSON(username));

      const objKeys = Object.keys(odata_response);

      // A ridiculous litmus test, must be changed to be reasonable
      if (objKeys.includes('UserName')) {
        this.log(`Fullname: ${odata_response.FirstName} ${odata_response.LastName}`);
        this.log(`UserName: ${odata_response.UserName}`);
        this.log(`Gender: ${odata_response.Gender}`);
      }
    }
    catch (e) {
      this.log(e);
      this.log(`Unable to fetch the list of people -- See if your internet is working appropriately`);
    }
  }
}

PersonCommand.description = `Searches and lists a person using its identifier over public OData API
...
Using public OData API, tries to search an individual and list the attributes associated with him/her
`

PersonCommand.flags = {
  username: flags.string({char: 'u', description: 'username to find the person against'}),
}

module.exports = PersonCommand
