const BASE_URL = 'https://services.odata.org/TripPinRESTierService/';

module.exports = {
    LIST_PEOPLE: (count) => count > 0 ? BASE_URL + 'People?$top=' + count : BASE_URL + 'People',
    SEARCH_PEOPLE: `${BASE_URL}People`,
    SEARCH_PERSON: (username) => `${BASE_URL}People('${username}')`
}