// src/models/streamModel.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Ação 1: Listar todos
export const encontreTodos = async (filtros = {}) => {
  const { ano, classificacao } = filtros; 
  const where = {};

  if (ano) {
    where.anoLancamento = Number(ano);
  }

  if (classificacao) {
    where.classificacao = {
      contains: classificacao,
      mode: "insensitive",
    };
  }

  return await prisma.streamDB.findMany({ // Usa StreamDB
    where: where,
    orderBy: { id: "asc" },
        include: { genero: true },
  });
};

// Ação 2: Encontrar um
export const encontreUm = async (id) => {
  return await prisma.streamDB.findUnique({ // Usa StreamDB
    where: { id: Number(id) },
        include: { genero: true },
  });
};

// Ação 3: Criar (ATUALIZADO)
export const criar = async (dado) => {
  return await prisma.streamDB.create({ // Usa StreamDB
    data: {
      nome: dado.nome,
      descricao: dado.descricao,
      classificacao: dado.classificacao,
      anoLancamento: dado.anoLancamento,
      cardCapa: dado.cardCapa, // NOVO: Adicionado campo cardCapa (obrigatório)
      // Campos de mídia (opcionais)
      video: dado.video || null,
      logo: dado.logo || null,
      poster: dado.poster || null,
            fundo: dado.fundo || null,
            // novos campos
            elenco: dado.elenco || null,
            generoId: dado.generoId || null,
    },
  });
};

// Ação 4: Deletar
export const deletar = async (id) => {
  return await prisma.streamDB.delete({ // Usa StreamDB
    where: { id: Number(id) },
  });
};

// Ação 5: Atualizar (ATUALIZADO)
export const atualizar = async (id, dado) => {
  return await prisma.streamDB.update({ // Usa StreamDB
    where: { id: Number(id) },
    data: {
      ...(dado.nome && { nome: dado.nome }),
      ...(dado.descricao && { descricao: dado.descricao }),
      ...(dado.classificacao && { classificacao: dado.classificacao }),
      ...(dado.anoLancamento && { anoLancamento: dado.anoLancamento }),
      ...(dado.cardCapa && { cardCapa: dado.cardCapa }), // NOVO: Adicionado para atualização
      // Adicionado suporte para atualizar campos de mídia
      ...(dado.video && { video: dado.video }),
      ...(dado.logo && { logo: dado.logo }),
      ...(dado.poster && { poster: dado.poster }),
      ...(dado.fundo && { fundo: dado.fundo }),
            ...(dado.elenco && { elenco: dado.elenco }),
            ...(dado.generoId && { generoId: dado.generoId }),
    },
  });
};