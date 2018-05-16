import { Document, Schema, Model, model} from "mongoose";
import { ISymbol } from "../interfaces/symbol";

export interface ISymbolModel extends ISymbol, Document {
    spread(): Float32Array;
}

export var SymbolSchema: Schema = new Schema({
    createdAt: Date,
    symbol: String,
    status: String,
    baseAsset: String,
    baseAssetPrecision: Number,
    quoteAsset: String,
    quotePrecision: Number,
    orderTypes: Array,
    icebergAllowed: Boolean,
    filters: Array
});

SymbolSchema.pre("save", function(next) {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
SymbolSchema.methods.spread = function(): string {
    //TODO Provide method for candle spread (whip), already evaluated.
    return ('coming soon');
};

export const Symbol: Model<ISymbolModel> = model<ISymbolModel>("Symbol", SymbolSchema);