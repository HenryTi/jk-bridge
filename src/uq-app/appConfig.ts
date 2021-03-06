//=== UqApp builder created on Tue Jan 12 2021 23:14:51 GMT-0500 (GMT-05:00) ===//
import { AppConfig, DevConfig } from "tonva-react";

const bz: DevConfig = {
	name: 'bizdev',
	alias: 'bz',
}

const jk: DevConfig = {
	name: '百灵威系统工程部',
	alias: 'jk',
}

export const appConfig: AppConfig = {
	version: '0.1.0',
	app: undefined,
	uqs: [
		/*
		{
			dev: bz,
			name: 'hello-tonva',
			alias: 'HelloTonva',
			version: '0.1.0',
		},
		*/
		{
			dev: jk,
			name: 'bridge',
			alias: 'Bridge',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'deliver',
			alias: 'Deliver',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'collectpayment',
			alias: 'ReceivePayment',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'order',
			alias: 'Order',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'me',
			alias: 'Me',
			version: '0.1.0',
		},
	],
	noUnit: true,
    tvs: {},
	oem: undefined,
	htmlTitle: 'hello-tonva',
};
