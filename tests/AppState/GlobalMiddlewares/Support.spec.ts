import {logger} from '../../../src/AppState/GlobalMiddlewares/Support';


describe('test store support middlewares', () => {


  it('test logger', () => {

    const initialStore = {
      theme: 'light'
    };

    const store = {
      store: initialStore,
      getState:  function () {
        return store
      }
    };

    function action(actionPayload){
      return store.store.theme = actionPayload.payload
    }

    expect(logger(store, action, {type:'test', payload : 'dark'})).toEqual('dark')

  })
});
