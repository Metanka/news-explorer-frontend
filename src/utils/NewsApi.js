import {myData} from './Date';

class NewsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getAllArticles(tag) {
    return fetch(`${this._baseUrl}&q=${tag}`, {
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }


}

export const newsApi = new NewsApi({
  baseUrl: 'http://newsapi.org/v2/everything?' +
  `from=${myData.getLastWeek()}&` +
  `to=${myData.getToday()}&` +
  // 'country=ru&' +
  'sortBy=popularity&' +
  'pageSize=100&' +
  'apiKey=ab9097caa3e848c4b28c5ed7b3805a19',
  headers: {
    // 'Content-Type': 'application/json'
  }
});