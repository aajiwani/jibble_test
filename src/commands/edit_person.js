const {Command, flags} = require('@oclif/command');
const axios = require('axios');
const { EDIT_PERSON } = require('../const/odata_api');

class EditPersonCommand extends Command {
  async run() {
    const {flags} = this.parse(EditPersonCommand)
    const username = flags.username || null;
    const firstname = flags.firstname || null;
    const lastname = flags.lastname || null;

    try {
      const {data: odata_response} = await axios.post(EDIT_PERSON, {
        "UserName": username,
        "FirstName": firstname,
        "LastName": lastname,
      });

      this.log("Person successfully posted for creation");
    }
    catch (e) {
      this.log(e);
      this.log(`Unable to post person -- See if your internet is working appropriately`);
    }
  }
}

EditPersonCommand.description = `Enables you to post a person to the database
...
Using public OData API, tries to post a person data to fill in the database
`

EditPersonCommand.flags = {
  username: flags.string({char: 'u', description: 'username to fill in the data', required: true}),
  firstname: flags.string({char: 'f', description: 'first name to fill in the data', required: true}),
  lastname: flags.string({char: 'l', description: 'last name to fill in the data', required: true}),
  create: flags.boolean({default: false, allowNo: false}),
}

module.exports = EditPersonCommand
