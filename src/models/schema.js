import mongoose, {Schema} from "mongoose";

const dSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)



export const D = mongoose.model("D", dSchema)