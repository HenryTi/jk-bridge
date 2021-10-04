import { ParamSendBusAdapterEx, ParamSendBusFiReceivableEx, ParamSendBusOrderChangedEx } from "uq-app/uqs/JkBridge";
import { ParamDoneDeliver } from "uq-app/uqs/JkDeliver";
import { ParamSaveOrder } from "uq-app/uqs/JkOrder";
import { ParamDoneReceive } from "uq-app/uqs/JkReceivePayment";

const orderId1 = 'jk-old-2';
const orderId2 = 'jk-old-2';
export const sendBusOrderChangedExParams:ParamSendBusOrderChangedEx[] = [
    {
        orderId: orderId2,
        orderItemId: 'jk-old-item-3',
        seller: 'a', // string;
        salesman: 100, // number;
        salesRegion: 3, // number;
        customer: 100, // number;
        buyerAccount: 100, // number;
        organization: 1, // number;
        brand: 2, // number;
        product: 3, // number;
        pack: 5, // number;
        quantity: 10, // number;
        price: 10.99, // number;
        currency: 1, // number;
        retail: 2, // number;
        retailCurrency: 1, // number;
        bottomPrice: 9.99, // number;
        bottomPriceCurrency: 1, // number;
        costPrice: 8.99, // number;
        costPriceCurrency: 1, // number;
        mark: 'a', // string;
        tradeType: 'b', // string;
        taxRate: 0.06, // number;
        promotionId: 'bb', // string;
        createDate: Date.now() / 1000, // number;
    },
    {
        orderId: orderId2,
        orderItemId: 'jk-old-item-4',
        seller: 'a', // string;
        salesman: 100, // number;
        salesRegion: 3, // number;
        customer: 100, // number;
        buyerAccount: 100, // number;
        organization: 1, // number;
        brand: 2, // number;
        product: 3, // number;
        pack: 5, // number;
        quantity: 10, // number;
        price: 10.99, // number;
        currency: 1, // number;
        retail: 2, // number;
        retailCurrency: 1, // number;
        bottomPrice: 9.99, // number;
        bottomPriceCurrency: 1, // number;
        costPrice: 8.99, // number;
        costPriceCurrency: 1, // number;
        mark: 'a', // string;
        tradeType: 'b', // string;
        taxRate: 0.06, // number;
        promotionId: 'bb', // string;
        createDate: Date.now() / 1000, // number;
    },
];

export const sendBusFiReceivableExParams:ParamSendBusFiReceivableEx[] = [
    {
        orderItemId: 'jk-old-item-4',
        orderId: orderId2,
        amount: 100,
        currency: 1,
        action: null,
        createDate: Date.now() / 1000, // number;
    }
];

export const sendBusAdapterExParams:ParamSendBusAdapterEx[] = [
	{
        outBoundItemId: undefined,
	    outBoundId: undefined,
	    warehouseName: undefined,
	    logisticsCompanyId: undefined,
	    logisticsNumber: undefined,
	    deliveryGoodsTime: undefined,
	    deliveryAddress: undefined,
	    saleOrderId: orderId1,
	    saleOrderItemId: 'jk-old-item-1',
	    packageId: undefined,
	    quantity: 3,
	    operatorId: undefined,
        operatorName: undefined,
        operatorPhone: undefined,
        customerId: undefined,
    }
];

export const sendBusJkOrderBusParams: ParamDoneDeliver = {
	customer: 1,
	contact: 2,
	warehouse: 1,
	detail: [
        {
            orderDetail: 31198796,
            quantity: 17,
	    },
        {
            orderDetail: 31198797,
            quantity: 9,
	    },
        {
            orderDetail: 31198798,
            quantity: 11,
	    },
    ],
};

export const sendBusJkReceivePaymentDoneReceive: ParamDoneReceive = {
	customer: 1,
	detail: [
        {
            orderDetail: 31198796,
            amount: 17,
	    },
        {
            orderDetail: 31198797,
            amount: 9,
	    },
        {
            orderDetail: 31198798,
            amount: 11,
	    },
    ],
};

export const saveOrderParams:ParamSaveOrder = {
	id: undefined,
	no: undefined, 
	webUser: undefined,
	customer: 65695,
	buyerAccount: undefined,
	shippingContact: undefined,
	invoiceContact: undefined,
	invoiceType: undefined,
	invoiceInfo: undefined,
	sumAmount: undefined,
	currency: undefined,
	couponNo: undefined,
	sheetId: undefined,
    createDate: undefined,
	detail: [
        {
            id: undefined,
            main: undefined,
            warehouse: 14,
            item: 29514,
            product: 12686,
            quantity: 17,
            price: 1.70,
            amount: 1.7*17,
            lotNumber: undefined,
            createDate: new Date(),
	    },
        {
            id: undefined,
            main: undefined,
            warehouse: 14,
            item: 2422,
            product: 1003,
            quantity: 18,
            price: 1.88,
            amount: 1.88*18,
            lotNumber: undefined,
            createDate: new Date(),
	    },
        {
            id: undefined,
            main: undefined,
            warehouse: 14,
            item: 2423,
            product: 1003,
            quantity: 19,
            price: 1.99,
            amount: 1.99*19,
            lotNumber: undefined,
            createDate: new Date(),
	    },
    ],
}
