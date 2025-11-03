import express from "express";
import dotenv from "dotenv";
import streamRoutes from './src/routes/streamRoutes.js';
import generoRoutes from './src/routes/generoRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use('/streams', streamRoutes);
app.use('/generos', generoRoutes);

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});