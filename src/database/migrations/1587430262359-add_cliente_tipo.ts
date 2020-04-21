import {MigrationInterface, QueryRunner} from "typeorm";

export class addClienteTipo1587430262359 implements MigrationInterface {
    name = 'addClienteTipo1587430262359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipo_de_cliente" ("compania" character varying(4) NOT NULL, "tipo_de_cliente" SERIAL NOT NULL, "descripcion" character varying NOT NULL, "creado_en" TIMESTAMP NOT NULL DEFAULT now(), "actualizado_en" TIMESTAMP NOT NULL DEFAULT now(), "estado" character varying(1) NOT NULL DEFAULT 'A', CONSTRAINT "PK_f92ef91f56f92cf5b87f1c3d2a3" PRIMARY KEY ("compania", "tipo_de_cliente"))`, undefined);
        await queryRunner.query(`CREATE TABLE "clientes" ("compania" character varying(4) NOT NULL, "clienteId" SERIAL NOT NULL, "descripcion" character varying NOT NULL, "telefono" character varying(25), "creado_en" TIMESTAMP NOT NULL DEFAULT now(), "actualizado_en" TIMESTAMP NOT NULL DEFAULT now(), "estado" character varying(1) NOT NULL DEFAULT 'A', "tipo_de_cliente" integer, CONSTRAINT "PK_cd3c10a103e7e502229fdde3975" PRIMARY KEY ("compania", "clienteId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "role_users_users" ("roleId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_3d373917ad1ae310d51ace06261" PRIMARY KEY ("roleId", "usersId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_917cb4f8e289feb6e038f4e09d" ON "role_users_users" ("roleId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_1b7b818cd42b91a06fd7abfd39" ON "role_users_users" ("usersId") `, undefined);
        await queryRunner.query(`ALTER TABLE "clientes" ADD CONSTRAINT "FK_f52bd1ae17fbacda793102a66f8" FOREIGN KEY ("compania", "tipo_de_cliente") REFERENCES "tipo_de_cliente"("compania","tipo_de_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role_users_users" ADD CONSTRAINT "FK_917cb4f8e289feb6e038f4e09d2" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role_users_users" ADD CONSTRAINT "FK_1b7b818cd42b91a06fd7abfd394" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_users_users" DROP CONSTRAINT "FK_1b7b818cd42b91a06fd7abfd394"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_users_users" DROP CONSTRAINT "FK_917cb4f8e289feb6e038f4e09d2"`, undefined);
        await queryRunner.query(`ALTER TABLE "clientes" DROP CONSTRAINT "FK_f52bd1ae17fbacda793102a66f8"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_1b7b818cd42b91a06fd7abfd39"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_917cb4f8e289feb6e038f4e09d"`, undefined);
        await queryRunner.query(`DROP TABLE "role_users_users"`, undefined);
        await queryRunner.query(`DROP TABLE "clientes"`, undefined);
        await queryRunner.query(`DROP TABLE "tipo_de_cliente"`, undefined);
    }

}
