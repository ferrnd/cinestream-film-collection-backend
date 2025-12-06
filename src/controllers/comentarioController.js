import * as comentariosModel from "../models/comentarioModel.js";

// 💡 FUNÇÃO ADICIONADA: PARA A ROTA GET /comentarios
export const listarTodos = async (req, res) => {
    try {
        // Não precisamos de filtros do req.query, mas mantemos o padrão
        const comentarios = await comentariosModel.encontreTodos(); 

        if (!comentarios || comentarios.length === 0) {
            return res.status(404).json({
                total: 0,
                message: "No comments found",
                comentarios: [],
                status: 404,
            });
        }

        res.status(200).json({
            total: comentarios.length,
            message: "List of all comments",
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

export const listarPorFilmeId = async (req, res) => {
    try {
        const filmeId = req.params.id;

        if (!filmeId) {
            return res.status(400).json({
                error: "Required field missing",
                message: "The film ID (string) must be provided in the route parameters.",
                status: 400,
            });
        }

        const comentarios = await comentariosModel.encontrePorIdFilme(filmeId); 

        // Adicionando verificação de 404 para ser mais robusto
        if (!comentarios || comentarios.length === 0) {
            return res.status(404).json({
                total: 0,
                message: `No comments found for film ID: ${filmeId}`,
                comentarios: [],
                status: 404,
            });
        }
        
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

export const deletarComentario = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                error: "Required field missing",
                message: "The comment ID must be provided in the route parameters.",
                status: 400,
            });
        }

        const result = await comentariosModel.deleteComentarioById(id);
        if (!result || result.count === 0) {
            return res.status(404).json({
                message: `Comment with id ${id} not found or already deleted`,
                status: 404,
            });
        }

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            error: "Error deleting comment",
            details: error.message,
            status: 500,
        });
    }
};