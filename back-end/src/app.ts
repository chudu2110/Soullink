import express from 'express';
import cors from 'cors';
import { MatchController } from './controllers/MatchController';

const app = express();
const matchController = new MatchController();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/match', matchController.generateMatch);

export default app;
