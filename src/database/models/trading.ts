import type {
  BaseModel,
} from "./baseModel";

export interface Strategy extends BaseModel {

  readonly name: string;

  readonly enabled: boolean;

}

export interface Indicator extends BaseModel {

  readonly name: string;

  readonly enabled: boolean;

}

export interface Symbol extends BaseModel {

  readonly symbol: string;

  readonly baseAsset: string;

  readonly quoteAsset: string;

  readonly active: boolean;

}

export interface Position extends BaseModel {

  readonly symbolId: number;

  readonly strategyId: number;

  readonly quantity: number;

  readonly entryPrice: number;

  readonly status: string;

  readonly openedAt: string;

  readonly closedAt: string | null;

}

export interface Order extends BaseModel {

  readonly positionId: number | null;

  readonly exchangeOrderId: string | null;

  readonly symbol: string;

  readonly side: string;

  readonly type: string;

  readonly quantity: number;

  readonly price: number | null;

  readonly status: string;

}

export interface Trade {

  readonly id: number;

  readonly orderId: number;

  readonly symbol: string;

  readonly side: string;

  readonly quantity: number;

  readonly price: number;

  readonly fee: number;

  readonly profitLoss: number | null;

  readonly executedAt: string;

}

export interface Portfolio {

  readonly asset: string;

  readonly free: number;

  readonly locked: number;

  readonly updatedAt: string;

}
