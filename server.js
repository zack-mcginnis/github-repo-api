import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/repos', routes.repo);

app.listen(port, () => console.log(`Github popular repo API server listening on port ${port}!`));

export default app;