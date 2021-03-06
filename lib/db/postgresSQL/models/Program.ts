import {
    AllowNull,
    Column,
    CreatedAt,
    Model,
    PrimaryKey, Table,
} from "sequelize-typescript";

@Table
export class Program extends Model<Program> {

    @PrimaryKey
    @Column
    public id!: number;

    @AllowNull(false)
    @Column
    public name!: string;

    @AllowNull(true)
    @Column
    public logo!: string;

    @CreatedAt
    public creationDate!: Date;

}
