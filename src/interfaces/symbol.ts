export interface ISymbol {
    symbol?: string;
    status?: string;
    baseAsset?: string;
    baseAssetPrecision?: Number;
    quoteAsset?: string;
    quotePrecision?: Number;
    orderTypes?: Array;
    icebergAllowed?: boolean;
    filters?: Array;
}
