const BASE_URL = 'https://api.themetanka.students.nomoreparties.xyz';

export const register = (password, email, name, callback) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password,
      email,
      name
    })
  })
    .then(res => {
      if (res.ok) {
        callback({ success: 'Вы успешно зарегистрировались!' });
        return res.json();
      }
      callback({ fail: 'Что-то пошло не так! Попробуйте ещё раз.' });
      return Promise.reject((res.status === 400) ? `${res.status} некорректно заполнено одно из полей` : `Что-то пошло не так ${res.status}`);
    });
};

export const auth = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject((res.status === 400) ? `${res.status} не передано одно из полей` : `Пользователь с email не найден ${res.status}`);
    });
};

export const getToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((data) => Promise.reject(`${res.status} - ${data.error || 'токен не передан или передан не в том формате'}`));
    });
};
