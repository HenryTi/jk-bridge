import { CUqBase } from "uq-app";
import { saveOrderParams, sendBusAdapterExParams, sendBusFiReceivableExParams, sendBusJkOrderBusParams, sendBusOrderChangedExParams } from "./data";
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

	createNewOrder = async () => {
		let {JkOrder} = this.uqs;
		let ret = await JkOrder.SaveOrder.submit(saveOrderParams);
		alert(JSON.stringify(ret));
		let {id} = ret;
		let [orderMain, orderDetails] = await JkOrder.IDDetailGet({
			id,
			main: JkOrder.OrderMain,
			detail: JkOrder.OrderDetail,
		});
		alert(JSON.stringify(orderDetails));
		alert('数据已经准备好，可以直接发JkOrder.deliver-done bus');
		
		for (let i=0; i<orderDetails.length; i++) {
			sendBusJkOrderBusParams.detail[i].orderDetail = (orderDetails[i] as any).id;
		}
	}

	deliverDone = async () => {
		await this.uqs.JkDeliver.DoneDeliver.submit(sendBusJkOrderBusParams);
	}
}
