import Slide from '../Slide';

const Body = Slide(`
# Sagas

* Middleware that makes your async calls look synchronous
* Uses ES 6 generators (the weird *)
* Avoids callback hell
* Supports things like forking, complicated task logic, cross call communication

*From our own Import/Export tool*

\`\`\`
export const GET_IMPORT_TYPES_ACTION = 'GET_IMPORT_TYPES_ACTION';

function* getImportTypes() {

    const items = yield call(API.getImportTypes);

    yield put({
      type: GET_IMPORT_TYPES_ACTION,
      cached: false,
      items: items
    });
}

export default getImportTypes;

\`\`\`

`)

export default Body;