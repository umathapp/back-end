import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";
import {Curriculum} from "./Curriculum";

@Table
export class Topic extends Model<Topic> {

    @PrimaryKey
    @Column
    public id!: number;

    @AllowNull(false)
    @Column
    public name!: string;

    @AllowNull(true)
    @Column
    public logo!: string;

    @AllowNull(false)
    @Column
    public skillCount!: number;

    @AllowNull(false)
    @Column
    public minTestNum!: number;

    @AllowNull(false)
    @Column
    public maxTestNum!: number;

    @ForeignKey(() => Curriculum)
    @AllowNull(false)
    @Column
    public curriculumId!: number;

    @BelongsTo(() => Curriculum)
    public curriculum!: Curriculum;

    @CreatedAt
    public creationDate!: Date;


}
