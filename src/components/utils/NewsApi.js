class NewsApi {
  constructor({baseUrl, headers}) {
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
    return fetch(`${this.baseUrl}/everything?q=${query}`, {
      method: 'GET',
      headers:{
        'X-Api-Key': 'dd0ddf2623e644a881674884ed750c54'
      }
    }).then(this._checkRes);
  }
}

export const api = new NewsApi({
  baseUrl: 'https://newsapi.org/v2',
});

export default NewsApi;
