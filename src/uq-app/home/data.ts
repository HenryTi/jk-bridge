import { ParamSendBusAdapterEx, ParamSendBusFiReceivableEx, ParamSendBusOrderChangedEx } from "uq-app/uqs/JkBridge";

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
