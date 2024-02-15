-- CreateTable
CREATE TABLE "doc_types" (
    "id" SERIAL NOT NULL,
    "doc_name" VARCHAR NOT NULL,
    "doc_path" VARCHAR NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "subtag_id" INTEGER,
    "user_id" INTEGER,

    CONSTRAINT "doc_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "main_tags" (
    "id" SERIAL NOT NULL,
    "tag_name" VARCHAR NOT NULL,
    "tag_path" VARCHAR NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "main_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meta_tables" (
    "id" SERIAL NOT NULL,
    "meta_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meta_name" VARCHAR NOT NULL,
    "meta_desc" VARCHAR NOT NULL,
    "meta_image" VARCHAR NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "subtag_id" INTEGER,
    "doc_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "meta_alt" VARCHAR,

    CONSTRAINT "meta_tables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_tags" (
    "id" SERIAL NOT NULL,
    "tag_name" VARCHAR NOT NULL,
    "tag_path" VARCHAR NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "sub_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "username" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "fav_table" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_entries" (
    "id" SERIAL NOT NULL,
    "entry_value" VARCHAR NOT NULL,
    "table_id" INTEGER NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "table_entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doc_types_doc_path_key" ON "doc_types"("doc_path");

-- CreateIndex
CREATE UNIQUE INDEX "main_tags_tag_name_key" ON "main_tags"("tag_name");

-- CreateIndex
CREATE UNIQUE INDEX "main_tags_tag_path_key" ON "main_tags"("tag_path");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "doc_types" ADD CONSTRAINT "doc_types_subtag_id_fkey" FOREIGN KEY ("subtag_id") REFERENCES "sub_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "doc_types" ADD CONSTRAINT "doc_types_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "main_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "doc_types" ADD CONSTRAINT "doc_types_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "main_tags" ADD CONSTRAINT "main_tags_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "meta_tables" ADD CONSTRAINT "meta_tables_doc_id_fkey" FOREIGN KEY ("doc_id") REFERENCES "doc_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "meta_tables" ADD CONSTRAINT "meta_tables_subtag_id_fkey" FOREIGN KEY ("subtag_id") REFERENCES "sub_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "meta_tables" ADD CONSTRAINT "meta_tables_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "main_tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "meta_tables" ADD CONSTRAINT "meta_tables_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_tags" ADD CONSTRAINT "sub_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "main_tags"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_tags" ADD CONSTRAINT "sub_tags_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "table_entries" ADD CONSTRAINT "table_entries_table_id_fkey" FOREIGN KEY ("table_id") REFERENCES "meta_tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "table_entries" ADD CONSTRAINT "table_entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
