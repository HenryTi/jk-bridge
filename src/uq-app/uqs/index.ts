//=== UqApp builder created on Thu Sep 16 2021 00:08:47 GMT-0400 (北美东部夏令时间) ===//
import * as JkBridge from './JkBridge';
import * as JkDeliver from './JkDeliver';
import * as JkOrder from './JkOrder';

export interface UQs {
	JkBridge: JkBridge.UqExt;
	JkDeliver: JkDeliver.UqExt;
	JkOrder: JkOrder.UqExt;
}

export * as JkBridge from './JkBridge';
export * as JkDeliver from './JkDeliver';
export * as JkOrder from './JkOrder';

export function setUI(uqs:UQs) {
	JkBridge.setUI(uqs.JkBridge);
	JkDeliver.setUI(uqs.JkDeliver);
	JkOrder.setUI(uqs.JkOrder);
}
