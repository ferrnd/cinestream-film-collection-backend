// src/models/comentarioModel.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encontreTodos = async (filtros = {}) => {
  // O endpoint de comentários geralmente não precisa de filtros complexos.
  // Apenas listamos todos, ou podemos limitar o número se houver muitos.
  return await prisma.comentario.findMany({
    orderBy: { id: "desc" }, // Lista os mais recentes primeiro
    // Se você tivesse a relação com Stream (Foreign Key):
    // include: { stream: true }, 
  });
};

export const encontrePorIdFilme = async (idFilmeCard) => {
  return await prisma.comentario.findMany({
    where: { idFilmeCard: idFilmeCard },
    orderBy: { id: "asc" },
  });
};

export const criarComentario = async (dado) => {
  return await prisma.comentario.create({
    data: {
      nomeUsuario: dado.nomeUsuario,
      textoComentario: dado.textoComentario,
      idFilmeCard: dado.idFilmeCard,
    },
  });
};

export const deleteComentarioById = async (id) => {
  const parsed = Number(id);
  if (Number.isNaN(parsed)) return { count: 0 };
  return await prisma.comentario.deleteMany({ where: { id: parsed } });
};