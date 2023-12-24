CREATE TABLE "best_of_category"(
    "id" BIGINT NOT NULL,
    "path" VARCHAR(255) NOT NULL,
    "service_type_id" VARCHAR(255) CHECK
        ("service_type_id" IN('')) NOT NULL
);
ALTER TABLE
    "best_of_category" ADD PRIMARY KEY("id");
CREATE TABLE "service_provider_timing"(
    "id" BIGINT NOT NULL,
    "service_provider_id" BIGINT NOT NULL,
    "day" VARCHAR(255) CHECK
        ("day" IN('')) NOT NULL,
        "opening_time" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
        "closing_time" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "service_provider_timing" ADD PRIMARY KEY("id");
CREATE TABLE "service_type"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "service_type" ADD PRIMARY KEY("id");
CREATE TABLE "service_provider_best_of_category_join_table"(
    "id" BIGINT NOT NULL,
    "best_of_category_id" BIGINT NOT NULL,
    "service_provider_id" BIGINT NOT NULL
);
ALTER TABLE
    "service_provider_best_of_category_join_table" ADD PRIMARY KEY("id");
CREATE TABLE "service_provider_images"(
    "id" BIGINT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "service_provider_id" BIGINT NOT NULL
);
ALTER TABLE
    "service_provider_images" ADD PRIMARY KEY("id");
CREATE TABLE "service_provider"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "rating" DECIMAL(8, 2) NOT NULL,
    "phone_number" BIGINT NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "pincode" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "review_count" INTEGER NOT NULL,
    "service_category" UUID NOT NULL
);
ALTER TABLE
    "service_provider" ADD PRIMARY KEY("id");
CREATE TABLE "reviews"(
    "id" BIGINT NOT NULL,
    "service_provider_id" BIGINT NOT NULL,
    "rating" DECIMAL(8, 2) NOT NULL,
    "review" VARCHAR(255) NOT NULL,
    "likes" INTEGER NOT NULL,
    "dislikes" INTEGER NOT NULL,
    "reviewer_name" VARCHAR(255) NOT NULL,
    "reviewer_image_url" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "reviews" ADD PRIMARY KEY("id");
CREATE TABLE "services"(
    "id" BIGINT NOT NULL,
    "service_type_id" VARCHAR(255) CHECK
        ("service_type_id" IN('')) NOT NULL,
        "service_provider_id" BIGINT NOT NULL
);
ALTER TABLE
    "services" ADD PRIMARY KEY("id");
ALTER TABLE
    "services" ADD CONSTRAINT "services_service_provider_id_foreign" FOREIGN KEY("service_provider_id") REFERENCES "service_provider"("id");
ALTER TABLE
    "service_provider_best_of_category_join_table" ADD CONSTRAINT "service_provider_best_of_category_join_table_best_of_category_id_foreign" FOREIGN KEY("best_of_category_id") REFERENCES "best_of_category"("id");
ALTER TABLE
    "service_provider_best_of_category_join_table" ADD CONSTRAINT "service_provider_best_of_category_join_table_service_provider_id_foreign" FOREIGN KEY("service_provider_id") REFERENCES "service_provider"("id");
ALTER TABLE
    "service_provider_timing" ADD CONSTRAINT "service_provider_timing_service_provider_id_foreign" FOREIGN KEY("service_provider_id") REFERENCES "service_provider"("id");
ALTER TABLE
    "service_provider_images" ADD CONSTRAINT "service_provider_images_service_provider_id_foreign" FOREIGN KEY("service_provider_id") REFERENCES "service_provider"("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_service_provider_id_foreign" FOREIGN KEY("service_provider_id") REFERENCES "service_provider"("id");