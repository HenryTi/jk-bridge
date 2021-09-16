import { FA, LMR, Page, VPage } from "tonva-react";
import { CHome } from "./CHome";
import logo from '../../logo.svg';
import '../../App.css';
import { saveOrderParams, sendBusAdapterExParams, sendBusFiReceivableExParams, sendBusJkOrderBusParams, sendBusOrderChangedExParams } from "./data";

interface Item {
	caption: string;
	json: any;
	action: () => Promise<void>;
}

export class VHome extends VPage<CHome> {
	header() {return '首页'}
	content() {
		let items:Item[] = [
			{
				caption: '发送Bus OrderChanged.orderChanged',
				json: sendBusOrderChangedExParams,
				action: this.controller.sendBusOrderChangedEx,
			},
			{
				caption: '发送Bus FiReceivable.innerOrderPaid',
				json: sendBusFiReceivableExParams,
				action: this.controller.sendBusFiReceivableEx,
			},
			{
				caption: '发送Bus Adapter.deliveryConfirm',
				json: sendBusAdapterExParams,
				action: this.controller.sendBusAdapterEx,
			},
			{
				caption: '新建模拟订单',
				json: saveOrderParams,
				action: this.controller.createNewOrder,
			},
			{
				caption: '发送Bus JkOrderBus.dleiver-done',
				json: sendBusJkOrderBusParams,
				action: this.controller.deliverDone,
			},
		];
		return <div className="my-3">
			{items.map(v => this.renderItem(v))}
		</div>;
	}

	private renderItem(item:Item):JSX.Element {
		let {caption, json, action} = item;
		let right = <FA name="angle-right" />;
		return <LMR className="cursor-pointer p-3 mb-1 bg-white" 
			right={right} onClick={() => this.clickItem(item)}>
			{caption}
		</LMR>;
	}

	private clickItem(item:Item) {
		let {caption} = item;
		this.openPageElement(<Page header={caption}>
			<div className="p-3">
				<pre className="mb-3">{JSON.stringify(item.json, null, 4)}</pre>
				<button className="btn btn-primary" onClick={() => this.submit(item)}>发送</button>
			</div>
		</Page>);
	}

	private async submit(item:Item) {
		this.closePage();
		this.openPageElement(<Page header="发送中...">
			<div className="p-3">
				<i className="fa fa-spinner fa-spin fa-1x fa-fw" />
			</div>
		</Page>);
		let {action, caption, json} = item;
		await action();
		this.closePage();
		this.openPageElement(<Page header="发送完成" back="close">
			<div className="py-3">
				<div className="px-3 text-success">完成{caption}</div>
				<pre className="bg-white my-3 p-3">{JSON.stringify(item.json, null, 4)}</pre>
			</div>
		</Page>);
	}
}