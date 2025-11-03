-- CreateTable
CREATE TABLE "Gêneros" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gêneros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stream" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "anoLancamento" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stream_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gêneros_nome_key" ON "Gêneros"("nome");

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Gêneros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
