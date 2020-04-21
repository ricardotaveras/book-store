import {MigrationInterface, QueryRunner} from "typeorm";

export class roles1586823713235 implements MigrationInterface {
    name = 'roles1586823713235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_details" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "lastname" character varying, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "create_at" TIMESTAMP NOT NULL, "update_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_fb08394d3f499b9e441cab9ca51" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "description" text NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "create_at" TIMESTAMP NOT NULL, "update_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_roles" ("usersId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_c06df5b3bf69aff63bc90b65a3d" PRIMARY KEY ("usersId", "roleId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_99b019339f52c63ae615358738" ON "user_roles" ("usersId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_86033897c009fcca8b6505d6be" ON "user_roles" ("roleId") `, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "detail_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_9fc134ca20766e165ad650ee740" UNIQUE ("detail_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_9fc134ca20766e165ad650ee740" FOREIGN KEY ("detail_id") REFERENCES "user_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_99b019339f52c63ae6153587380" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_86033897c009fcca8b6505d6be2" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_86033897c009fcca8b6505d6be2"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_99b019339f52c63ae6153587380"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_9fc134ca20766e165ad650ee740"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_9fc134ca20766e165ad650ee740"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "detail_id"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_86033897c009fcca8b6505d6be"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_99b019339f52c63ae615358738"`, undefined);
        await queryRunner.query(`DROP TABLE "user_roles"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
        await queryRunner.query(`DROP TABLE "user_details"`, undefined);
    }

}
