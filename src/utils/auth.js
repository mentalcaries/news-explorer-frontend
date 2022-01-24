const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.newsxp.students.nomoreparties.sbs'
    : 'http://localhost:3000';

function checkRes(res) {
  if (res.ok) {
    return res.JSON();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function register (email, password, name){
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password, name}),
  }).then(checkRes);
};


export function authorise(email, password) {
  return fetch( `${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkRes)
  .then((data)=>{
    if (data.token) {
      localStorage.setItem('jwt', data.token)
      return data
    }
    return;
  })
}

export function verifyUser(token){
  return fetch(`${BASE_URL}/users/me`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .then(checkRes)
  .then((data)=>data)
}