import Slide from '../Slide';

const Body = Slide(`
# Lets fetch some data from the server!

## FINALLY

*well almost*

* Redux has no way to fetch data, have to choose the middleware that suits your project

    * Thunks
    * Saga
    * Others!
### Always fetch your data from your Action Creator. 

* The Action Creator is welcome to call a API service or whatever.

`)

export default Body;