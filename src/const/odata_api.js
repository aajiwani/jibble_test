const API_URL = 'https://services.odata.org/TripPinRESTierService/';
const UNIQUE_KEY = 'zrun0zk0by1yvbdawz4ljeic';
const BASE_URL = `${API_URL}(S(${UNIQUE_KEY}))/`;


module.exports = {
    LIST_PEOPLE: (count) => count > 0 ? BASE_URL + 'People?$top=' + count : BASE_URL + 'People',
    SEARCH_PEOPLE: `${BASE_URL}People`,
    SEARCH_PERSON: (username) => `${BASE_URL}People('${username}')`,
    EDIT_PERSON: `${BASE_URL}People`
}