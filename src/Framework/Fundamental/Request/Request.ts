const { serverHTTP } = require(`../../../Env/${process.env.NODE_ENV}`);

interface Options {
  path?: string
  url?: string
  host?:string
  headers: {}
  params: {}
  queries: {}
  mode: string
  body: any
  form: any
}


class Request {

  options: Options = {
    path: '',
    url: '',
    host: serverHTTP,
    headers: {},
    params: {},
    mode: 'cors',
    queries: {},
    body: {},
    form:{}
  };

  constructor() {
    this.options = {
      path: '',
      url: '',
      host: serverHTTP,
      headers: {},
      params: {},
      mode: 'cors',
      queries: {},
      body: {},
      form: {},
    };
  }

  send(options) {
    const requestObj = {...this.options, ...options};
    return fetch(`${requestObj.path}${requestObj.url}`, requestObj)
      .then(this.prepareResponse.bind(this));
  }

  prepareResponse(response) {
    if(response.json) return response.json();
    return response;
  }

  get(options) {
    return this.send({...options, method: 'GET'});
  }

  post(options) {
    return this.send({...options, method: 'POST'});
  }

  delete(options) {
    return this.send({...options, method: 'DELETE'});
  }

  put(options) {
    return this.send({...options, method: 'PUT'});
  }

  static get(options) {
    return new Request().get(options);
  }

  static post(options) {
    return new Request().post(options)
  }

  static delete(options) {
    return new Request().delete(options);
  }

  static put(options) {
    return new Request().put(options);
  }
}

export default Request;
