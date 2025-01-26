-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "totalAmount" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "orderId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "totalAmount" DECIMAL NOT NULL,
    CONSTRAINT "order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "orders_id_key" ON "orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_items_id_key" ON "order_items"("id");
