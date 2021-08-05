import { CUqBase } from "uq-app";
import { ParamSendBusAdapterEx, ParamSendBusFiReceivableEx } from "uq-app/uqs/JkBridge";
import { sendBusAdapterExParams, sendBusFiReceivableExParams, sendBusOrderChangedExParams } from "./data";
import { VHome } from "./VHome";

export class CHome extends CUqBase {
	protected async internalStart() {
	}

	tab = () => this.renderView(VHome);

	load = async () => {

	}


	sendBusOrderChangedEx = async () => {
		for (let p of sendBusOrderChangedExParams) {
			await this.uqs.JkBridge.SendBusOrderChangedEx.submit(p);
		}
	}

	sendBusFiReceivableEx = async () => {
		for (let p of sendBusFiReceivableExParams) {
			await this.uqs.JkBridge.SendBusFiReceivableEx.submit(p);
		}
	}

	sendBusAdapterEx = async () => {
		for (let p of sendBusAdapterExParams) {
			await this.uqs.JkBridge.SendBusAdapterEx.submit(p);
		}
	}
}
