import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import streamRoutes from './src/routes/streamRoutes.js';
import generoRoutes from './src/routes/generoRoutes.js';
import comentarioRoutes from './src/routes/comentarioRoutes.js';
import dbStreamRoutes from './src/routes/streamDBRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use('/streams', streamRoutes);
app.use('/generos', generoRoutes);
app.use('/comentarios', comentarioRoutes);
app.use('/dbstreams', dbStreamRoutes); 

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});