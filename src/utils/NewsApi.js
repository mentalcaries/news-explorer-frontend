class NewsApi {
  constructor({baseUrl, headers, key}) {
    this.baseUrl = baseUrl;
    this.header = headers;
    this.key = key;
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

    return fetch(`${this.baseUrl}/everything?q=${query}&from=${prev7}&to=${currentDate}&pageSize=100&apiKey=${this.key}`, {
      method: 'GET',
      // headers:{
      //   'X-Api-Key': 'dd0ddf2623e644a881674884ed750c54'
      // }
    }).then(this._checkRes);
  }
}

export const api = new NewsApi({
  baseUrl: 'https://nomoreparties.co/news/v2',
  key: 'dd0ddf2623e644a881674884ed750c54'
});

export default NewsApi;
