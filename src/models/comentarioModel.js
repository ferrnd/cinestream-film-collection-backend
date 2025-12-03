import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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