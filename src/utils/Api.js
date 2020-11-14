class Api {
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

  saveArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        keyword, title, text, date, source, link, image,
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }
}

export const api = new Api({
  baseUrl: 'https://api.themetanka.students.nomoreparties.xyz',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}` ,
    'Content-Type': 'application/json'
  }
})