-- DropIndex
DROP INDEX "Todo_description_key";

-- DropIndex
DROP INDEX "Todo_title_key";

-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "description" DROP NOT NULL;
