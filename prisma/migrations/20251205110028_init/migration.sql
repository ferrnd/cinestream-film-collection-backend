-- CreateTable
CREATE TABLE "Comentarios" (
    "id" SERIAL NOT NULL,
    "id_filme_card" TEXT NOT NULL,
    "nome_usuario" TEXT NOT NULL,
    "texto_comentario" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comentarios_pkey" PRIMARY KEY ("id")
);
