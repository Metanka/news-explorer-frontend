class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // eslint-disable-next-line class-methods-use-this
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  saveArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        keyword, title, text, date, source, link, image
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  deleteArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }
}

export const api = new Api({
  baseUrl: 'https://api.themetanka.students.nomoreparties.xyz',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
