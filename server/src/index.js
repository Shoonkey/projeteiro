import express from 'express';
import cors from 'cors';
import { Project } from './api';

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get('/project/all', (req, res) => {
  try {
    const data = Project.getAll();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

app.get('/project/:id', (req, res) => {
  try {
    const data = Project.getById(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

app.post('/project/new', (req, res) => {
  const { title, type } = req.body;
  
  try {
    const newProject = Project.addProject({ title, type });
    res.status(200).json(newProject);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.message);
  }
});

app.use((req, res, next) => {
  res.status(404).send("404 Internet Error: Invalid API route");
});

app.listen(8000, () => {
  const envName = process.env.NODE_ENV === "production" ? "PROD" : "DEV";
  console.log(`[${envName}] Server listening on port ${port}`);
});