import { CUqBase } from "uq-app";
import { OrderDetail } from "uq-app/uqs/JkOrder";
import { saveOrderParams, sendBusAdapterExParams, sendBusFiReceivableExParams, sendBusJkOrderBusParams, sendBusJkReceivePaymentDoneReceive, sendBusOrderChangedExParams } from "./data";
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
		return true;
	}

	sendBusFiReceivableEx = async () => {
		for (let p of sendBusFiReceivableExParams) {
			await this.uqs.JkBridge.SendBusFiReceivableEx.submit(p);
		}
		return true;
	}

	sendBusAdapterEx = async () => {
		for (let p of sendBusAdapterExParams) {
			await this.uqs.JkBridge.SendBusAdapterEx.submit(p);
		}
		return true;
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
		
		this.pushOrderParams.orderMain = (orderMain[0] as any).id;
		for (let i=0; i<orderDetails.length; i++) {
			let orderDetail: OrderDetail = orderDetails[i] as OrderDetail;
			let {id:orderDetailId, quantity, amount} = orderDetail;
			let busParam = sendBusJkOrderBusParams.detail[i];			
			busParam.orderDetail = orderDetailId;
			let doneReceiveDetail = sendBusJkReceivePaymentDoneReceive.detail[i];
			doneReceiveDetail.orderDetail = orderDetailId;
			doneReceiveDetail.amount = (quantity / doneReceiveDetail.amount) * amount;
		}
		return true;
	}

	deliverDone = async () => {
		await this.uqs.JkDeliver.DoneDeliver.submit(sendBusJkOrderBusParams);
		return true;
	}

	receiveDone = async () => {
		await this.uqs.JkReceivePayment.DoneReceive.submit(sendBusJkReceivePaymentDoneReceive);
		return true;
	}

	pushOrderParams = {
		orderMain: 0,
	};
	pushOrderCost = async () => {
		let {orderMain} = this.pushOrderParams;
		if (!orderMain) {
			alert('no order main id');
			return false;
		}
		let ret = await this.uqs.JkMe.BusTestOrderSaleCost.submit({orderMain});
		return ret.ok === 1;
	}
	pushOrderBoundStaffSales = async () => {
		let {orderMain} = this.pushOrderParams;
		if (!orderMain) {
			alert('no order main id');
			return false;
		}
		await this.uqs.JkMe.BusTestBoundStaffSales.submit({orderMain});
		return true;
	}
}
