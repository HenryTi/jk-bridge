//=== UqApp builder created on Mon Oct 04 2021 00:03:28 GMT-0400 (北美东部夏令时间) ===//
import * as JkBridge from './JkBridge';
import * as JkDeliver from './JkDeliver';
import * as JkReceivePayment from './JkReceivePayment';
import * as JkOrder from './JkOrder';
import * as JkMe from './JkMe';

export interface UQs {
	JkBridge: JkBridge.UqExt;
	JkDeliver: JkDeliver.UqExt;
	JkReceivePayment: JkReceivePayment.UqExt;
	JkOrder: JkOrder.UqExt;
	JkMe: JkMe.UqExt;
}

export * as JkBridge from './JkBridge';
export * as JkDeliver from './JkDeliver';
export * as JkReceivePayment from './JkReceivePayment';
export * as JkOrder from './JkOrder';
export * as JkMe from './JkMe';

export function setUI(uqs:UQs) {
	JkBridge.setUI(uqs.JkBridge);
	JkDeliver.setUI(uqs.JkDeliver);
	JkReceivePayment.setUI(uqs.JkReceivePayment);
	JkOrder.setUI(uqs.JkOrder);
	JkMe.setUI(uqs.JkMe);
}
