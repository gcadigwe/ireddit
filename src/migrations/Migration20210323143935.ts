import { Migration } from '@mikro-orm/migrations';

export class Migration20210323143935 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("_id" serial primary key, "title" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('drop table if exists "playground" cascade;');
  }

}
