const {expect, test} = require('@oclif/test')
const UNIQUE_KEY = require('./../const').UNIQUE_KEY;

describe('edit_person', () => {
  test
  .stdout()
  .nock('https://services.odata.org', api =>
    api
      .post(`/TripPinRESTierService/(S(${UNIQUE_KEY}))/People`)
      .reply(200, {})
  )
  .command(['edit_person', '--username', 'aajiwani', '--firstname', 'Amir Ali', '--lastname', 'Jiwani', '--create'])
  .it('runs edit_person --create --username aajiwani --firstname "Amir Ali" --lastname Jiwani', ctx => {
    expect(ctx.stdout).to.contain('Person successfully posted for creation')
  })
})
