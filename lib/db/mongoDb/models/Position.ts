import {Document, Schema} from "mongoose";
import * as mongoose from "mongoose";

export interface Position extends Document {

    procedureId: string;
    lastPosition: string;
    currentScore: number;


}

const PositionSchema: Schema = new Schema({
    currentScore: {type: Number, required: true},
    lastPosition: {type: String, required: true},
    procedureId: {type: String, required: true},
});

export default mongoose.model<Position>("Positions", PositionSchema);
