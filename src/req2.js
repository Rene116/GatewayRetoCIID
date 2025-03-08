const express = require("express");


const app = express();

// Crea una tecnología emergente
app.post("/api/technologies/create", async (req, res) => {
    try {
        const createTechnology = await fetch('http://localhost:3001/api/technologies/create', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(req.body),
        }).then((res) => res.json());
        res.json(createTechnology);
    }catch(error) {
        console.log(error);
        res.status(500).json({error:"Error al crear la Tecnologia"})
    }
});

// Leer la lista de tecnologías emergentes o el detalle de una en específico
app.get("/api/technologies/read", async (req, res) => {
  try {
    // Construir la URL del microservicio con los query parameters
    const url = new URL("http://localhost:3001/api/technologies/read");
    Object.keys(req.query).forEach((key) =>
      url.searchParams.append(key, req.query[key])
    );

    // Redirigir la solicitud al microservicio usando fetch
    const response = await fetch(url.toString());
    const data = await response.json();

    // Devolver la respuesta al cliente
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las tecnologías" });
  }
});

// Actualiza la información 
app.put("/api/technologies/update/:id", async (req, res) => {
  const id =req.params.id;
  try {
    const updateTechnology = await fetch (
      `http://localhost:3001/api/technologies/update/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(req.body),
    }
    ).then((res) => res.json());
    res.json(updateTechnology);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al actualizar la tecnología" });
  }
});

// Elimina una tecnología 
app.delete("/api/technologies/delete/:id", async (req, res) => {
  const id = req.params.id;
  try { 
    const deleteTechnology = await fetch (
        `http://localhost:3001/api/technologies/delete/${id}`,
        {
            method: 'DELETE',
        }
        ).then((res) => res.json());
        res.send(deleteTechnology);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar la tecnología" });
      }    
    });
    

module.exports = app;