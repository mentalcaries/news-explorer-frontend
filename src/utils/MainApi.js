const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL
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

export function getSavedArticles(){
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers:{
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
  })
  .then(checkRes)
}


// Create article. Article is created when "bookmarked"
export function createArticle(article){
  return fetch(`${BASE_URL}/articles`,{
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(article),
  })
  .then(checkRes)
}


// Delete article

export function deleteArticle(articleId){
  return fetch(`${BASE_URL}/articles/${articleId}`,{
    method: 'DELETE',
    headers:{
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => checkRes(res))
}