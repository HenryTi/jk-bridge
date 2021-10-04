//=== UqApp builder created on Mon Oct 04 2021 00:03:28 GMT-0400 (北美东部夏令时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/bridge ========
//===============================

export interface Tuid$sheet {
	id?: number;
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface Tuid$user {
	id?: number;
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
}

export interface ParamSendBusFiReceivableEx {
	orderItemId: string;
	orderId: string;
	amount: number;
	currency: number;
	action: string;
	createDate: number;
}
export interface ResultSendBusFiReceivableEx {
}

export interface ParamSendBusAdapterEx {
	outBoundItemId: string;
	outBoundId: string;
	warehouseName: string;
	logisticsCompanyId: number;
	logisticsNumber: string;
	deliveryGoodsTime: string;
	deliveryAddress: string;
	saleOrderId: string;
	saleOrderItemId: string;
	packageId: string;
	quantity: number;
	operatorId: string;
	operatorName: string;
	operatorPhone: string;
	customerId: string;
}
export interface ResultSendBusAdapterEx {
}

export interface ParamSendBusOrderChangedEx {
	orderId: string;
	orderItemId: string;
	seller: string;
	salesman: number;
	salesRegion: number;
	customer: number;
	buyerAccount: number;
	organization: number;
	brand: number;
	product: number;
	pack: number;
	quantity: number;
	price: number;
	currency: number;
	retail: number;
	retailCurrency: number;
	bottomPrice: number;
	bottomPriceCurrency: number;
	costPrice: number;
	costPriceCurrency: number;
	mark: string;
	tradeType: string;
	taxRate: number;
	promotionId: string;
	createDate: number;
}
export interface ResultSendBusOrderChangedEx {
}

export interface Param$poked {
}
export interface Return$pokedRet {
	poke: number;
}
export interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamActs {
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	SendBusFiReceivableEx: UqAction<ParamSendBusFiReceivableEx, ResultSendBusFiReceivableEx>;
	SendBusAdapterEx: UqAction<ParamSendBusAdapterEx, ResultSendBusAdapterEx>;
	SendBusOrderChangedEx: UqAction<ParamSendBusOrderChangedEx, ResultSendBusOrderChangedEx>;
	$poked: UqQuery<Param$poked, Result$poked>;
}

export function assign(uq: any, to:string, from:any): void {
	Object.assign((uq as any)[to], from);
}
