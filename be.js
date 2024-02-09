const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv').config;
const BASE_URL = 'https://api.github.com/users/TobiasSkog';
const app = express();

app.get('/', (req, res) => {
  res.json('hi');
})
app.get('/news', (req, res) => {
  const updateName = (name) => {
    return name
      .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
      .replace(/([a-z\d])([A-Z])/g, '$1 $2')
      .replace(/([a-zA-Z])(\d)/g, '$1 $2')
      .replace(/^./, function (name) { return name.toUpperCase(); })
      .trim();
  };
  const githubRestApi = {
    method: 'GET',
    url: BASE_URL,
    headers: {

    }
  }
  axios.request(githubRestApi).then((response) => {
    res.json(response.data);
  }).catch((error) => {
    console.log(error);
  })
})

// const fetchPosts = async () => {
//   try {
//     // const response = null;
//     const response = await fetch(`${BASE_URL}/repos`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const repos = await response.json();
//     repos.forEach(repo => {
//       if (!repo.updatedName) {
//         repo.updatedName = updateName(repo.name)
//       }
//     });
//   } catch (error) {
//     console.log(error)
//   } finally {

//   }
// };



app.listen(8000, () => { console.log(`Backend-Server is running on port ${PORT}`) });