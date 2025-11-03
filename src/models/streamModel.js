import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encontreTodos = async () => {
  return await prisma.stream.findMany({
    orderBy: { id: "asc" },
    include: { genero: true },
  });
};

export const encontreUm = async (id) => {
  return await prisma.stream.findUnique({
    where: { id: Number(id) },
    include: { genero: true },
  });
};

export const criar = async (dado) => {
  return await prisma.stream.create({
    data: {
      nome: dado.nome,
      descricao: dado.descricao,
      classificacao: dado.classificacao,
      anoLancamento: dado.anoLancamento,
      generoId: dado.generoId,
    },
  });
};

export const deletar = async (id) => {
  return await prisma.stream.delete({
    where: { id: Number(id) },
  });
};

export const atualizar = async (id, dado) => {
  return await prisma.stream.update({
    where: { id: Number(id) },
    data: {
      ...(dado.nome && { nome: dado.nome }),
      ...(dado.descricao && { descricao: dado.descricao }),
      ...(dado.classificacao && { classificacao: dado.classificacao }),
      ...(dado.anoLancamento && { anoLancamento: dado.anoLancamento }),
      ...(dado.generoId && { generoId: dado.generoId }),
    },
  });
};