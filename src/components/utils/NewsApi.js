class NewsApi {
  constructor({baseUrl, headers, key}) {
    this.baseUrl = baseUrl;
    this.header = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getNews(query) {

    const currentDate = new Date(Date.now()).toISOString().substring(0,19)
    const prev7 = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().substring(0,19);

    return fetch(`${this.baseUrl}/everything?q=${query}&from=${prev7}&to=${currentDate}&pageSize=100`, {
      method: 'GET',
      headers:{
        'X-Api-Key': '9e0827e7e0fa48c3a9c54fa84bc818ec'
      }
    }).then(this._checkRes);
  }
}

export const api = new NewsApi({
  baseUrl: 'https://newsapi.org/v2',
});

export default NewsApi;
