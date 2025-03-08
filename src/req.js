const express = require('express');

const app = express();

app.get('/api/startups/read', async (req, res) => {
  try {
    const startups = await fetch('https://startups-dzkn.onrender.com/api/startups/read').then(
      (res) => res.json()
    );
    res.json(startups);
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/startups/read/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const startups = await fetch(
      `https://startups-dzkn.onrender.com/api/startups/read/${id}`
    ).then((res) => res.json());
    res.json(startups);
  } catch (error) {
    console.log(error);
  }
});

app.post('/api/startup/create', async (req, res) => {
  try {
    const createStartup = await fetch('https://startups-dzkn.onrender.com/api/startup/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(req.body),
    }).then((res) => res.json());
    res.json(createStartup);
  } catch (error) {
    console.log(error);
  }
});

app.put('/api/startups/update/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updateStartup = await fetch(
      `https://startups-dzkn.onrender.com/api/startups/update/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(req.body),
      }
    ).then((res) => res.json());
    res.json(updateStartup);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/api/startups/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deleteStartup = await fetch(
      `https://startups-dzkn.onrender.com/api/startups/delete/${id}`,
      {
        method: 'DELETE',
      }
    ).then((res) => res.json());
    res.send(deleteStartup);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
