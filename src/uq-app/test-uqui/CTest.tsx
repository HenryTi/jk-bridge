import { CBase, Context } from "tonva-react";
import { CID, MidID, CIDX, MidIDX, MidTag, CIDTagList, CTagIDList
	, SheetUI, MidIDTagList, CSheetNew, MidSheet } from "tonva-uqui";
import { CApp, UQs } from "uq-app";
//import { OrderDetail, OrderMaster } from "uq-app/uqs/BzHelloTonva";
import { VTester } from "./VTest";
import { isNumber } from "lodash";

export interface UIItem {
	name: string;
	discription?: string;
	click: () => Promise<void>;
}

export class CTester extends CBase<CApp,UQs> {
	readonly uiItems:UIItem[] = [
	];

	protected async internalStart() {
		this.openVPage(VTester);
	}

	tab = () => this.renderView(VTester);
}
