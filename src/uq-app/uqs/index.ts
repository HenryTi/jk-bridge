//=== UqApp builder created on Wed Aug 04 2021 17:01:57 GMT-0400 (北美东部夏令时间) ===//
import * as BzHelloTonva from './BzHelloTonva';
import * as JkBridge from './JkBridge';

export interface UQs {
	BzHelloTonva: BzHelloTonva.UqExt;
	JkBridge: JkBridge.UqExt;
}

export * as BzHelloTonva from './BzHelloTonva';
export * as JkBridge from './JkBridge';

export function setUI(uqs:UQs) {
	// BzHelloTonva.setUI(uqs.BzHelloTonva);
	JkBridge.setUI(uqs.JkBridge);
}
