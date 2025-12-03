import * as comentariosModel from "../models/comentariosModel.js";

export const listarPorFilmeId = async (req, res) => {
    try {

        const filmeId = req.query.filme_id; 

        if (!filmeId) {
            return res.status(400).json({
                error: "Required field missing",
                message: "The film ID (string) must be provided in the query parameters (filme_id).",
                status: 400,
            });
        }

        const comentarios = await comentariosModel.encontrePorIdFilme(filmeId); 

        res.status(200).json({
            total: comentarios.length,
            message: "List of comments found",
            comentarios,
            status: 200,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            details: error.message,
            status: 500,
        });
    }
};

export const criarComentario = async (req, res) => {
    try {
        const { nomeUsuario, textoComentario, idFilmeCard } = req.body;
        const camposObrigatorios = ["nomeUsuario", "textoComentario", "idFilmeCard"];

        const faltando = camposObrigatorios.filter((campo) => !req.body[campo]);
        if (faltando.length > 0) {
            return res.status(400).json({
                error: "Required fields missing",
                details: `The following fields are required: ${faltando.join(", ")}`,
                status: 400,
            });
        }

        const novoComentario = await comentariosModel.criarComentario(req.body);
        
        res.status(201).json({
            message: "Comment created successfully!",
            comentario: novoComentario,
            status: 201,
        });
    } catch (error) {
        res.status(500).json({
            error: "Error creating comment",
            details: error.message,
            status: 500,
        });
    }
};