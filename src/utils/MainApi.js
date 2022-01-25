const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.newsxp.students.nomoreparties.sbs'
    : 'http://localhost:3000';

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

// Get current user
export function getCurrentUser(){
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type':'application/json',
    },
  })
  .then(checkRes)
}
// Get articles
// Create article
// Delete article