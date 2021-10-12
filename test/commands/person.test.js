const {expect, test} = require('@oclif/test')

describe('person', () => {
  test
  .stdout()
  .command(['person'])
  .it('runs person', ctx => {
    expect(ctx.stdout).to.contain('Username must be filled to begin the activity of searching a person')
  })

  test
  .stdout()
  .nock('https://services.odata.org', api =>
    api
      .get('/TripPinRESTierService/People(%27scottketchum%27)')
      .reply(200, {
        "@odata.context": "https://services.odata.org/TripPinRESTierService/(S(uci0tksnfrvhp3ruq1bn5bps))/$metadata#People/$entity",
        "UserName": "scottketchum",
        "FirstName": "Scott",
        "LastName": "Ketchum",
        "MiddleName": null,
        "Gender": "Male",
        "Age": null,
        "Emails": [
          "Scott@example.com"
        ],
        "FavoriteFeature": "Feature1",
        "Features": [],
        "AddressInfo": [
          {
            "Address": "2817 Milton Dr.",
            "City": {
              "Name": "Albuquerque",
              "CountryRegion": "United States",
              "Region": "NM"
            }
          }
        ],
        "HomeAddress": null
      })
  )
  .command(['person', '--username', 'scottketchum'])
  .it('runs person --username scottketchum', ctx => {
    expect(ctx.stdout).to.contain('Fullname: Scott Ketchum');
    expect(ctx.stdout).to.contain('UserName: scottketchum');
    expect(ctx.stdout).to.contain('Gender: Male');
  })
})
