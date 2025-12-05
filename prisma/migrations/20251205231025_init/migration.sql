-- CreateTable
CREATE TABLE "StreamDB" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "anoLancamento" INTEGER NOT NULL,
    "cardCapa" TEXT NOT NULL,
    "video" TEXT,
    "logo" TEXT,
    "poster" TEXT,
    "fundo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StreamDB_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StreamDB_nome_key" ON "StreamDB"("nome");
