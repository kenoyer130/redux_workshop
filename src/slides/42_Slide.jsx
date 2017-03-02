import Slide from '../Slide';

const Body = Slide(`
# Thunks

* Middleware that allows returning a function that returns an Action instead of an actual Action
* Lets you do asynchronous Server API calls.

*From https://github.com/gaearon/redux-thunk*

\`\`\`
function makeASandwichWithSecretSauce(forPerson) {

  return function (dispatch) {
    // Server API fetch here  
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}

\`\`\`

`)

export default Body;