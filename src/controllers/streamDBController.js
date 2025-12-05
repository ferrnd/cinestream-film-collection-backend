// src/controllers/streamController.js

import * as streamModel from "../models/streamModel.js";

// Listar Todos
export const listarTodos = async (req, res) => {
    try {
        const filtros = req.query; 
        const streams = await streamModel.encontreTodos(filtros); 

        if (!streams || streams.length === 0) {
            return res.status(404).json({
                total: 0,
                message: "No streams found matching the criteria",
                streams,
            });
        }

        res.status(200).json({
            total: streams.length,
            message: "List of streams",
            streams,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            details: error.message,
            status: 500,
        });
    }
};

// Listar Um
export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const stream = await streamModel.encontreUm(id);

        if (!stream) {
            return res.status(404).json({
                error: "Stream not found",
                message: "Check the ID provided",
                id,
            });
        }

        res.status(200).json({
            message: "Stream found",
            stream,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            details: error.message,
            status: 500,
        });
    }
};

// Criar (ATUALIZADO)
export const criar = async (req, res) => {
    try {
        // Incluindo cardCapa na desestruturação (opcional)
        const { nome, descricao, classificacao, anoLancamento, cardCapa, video, logo, poster, fundo } = req.body;
        
        // cardCapa ADICIONADO como campo obrigatório
        const camposObrigatorios = ["nome", "descricao", "classificacao", "anoLancamento", "cardCapa"]; 

        const faltando = camposObrigatorios.filter((campo) => !req.body[campo]);
        if (faltando.length > 0) {
            return res.status(400).json({
                error: `Required fields missing: ${faltando.join(", ")}`,
            });
        }

        const novoStream = await streamModel.criar(req.body);
        res.status(201).json({
            message: "Stream created successfully!",
            stream: novoStream,
        });
    } catch (error) {
        res.status(500).json({
            error: "Error creating stream",
            details: error.message,
        });
    }
};

// Deletar
export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const streamExiste = await streamModel.encontreUm(id);
        if (!streamExiste) {
            return res.status(404).json({
                error: "Stream not found",
                id,
            });
        }

        await streamModel.deletar(id);
        res.status(200).json({
            message: "Stream deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            error: "Error deleting stream",
            details: error.message,
        });
    }
};

// Atualizar
export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const streamExiste = await streamModel.encontreUm(id);
        if (!streamExiste) {
            return res.status(404).json({
                error: "Stream does not exist",
                id,
            });
        }

        const streamAtualizado = await streamModel.atualizar(id, dados);
        res.status(200).json({
            message: "Stream updated successfully",
            stream: streamAtualizado,
        });
    } catch (error) {
        res.status(500).json({
            error: "Error updating stream",
            details: error.message,
        });
    }
};