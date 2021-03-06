import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { ItemHistory } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	track: {
		"name": "track",
		"type": "id",
		"isKey": true,
		"label": "Track"
	} as FieldItemId,
	item: {
		"name": "item",
		"isKey": true,
		"label": "Item"
	} as undefined,
	referer: {
		"name": "referer",
		"type": "id",
		"isKey": false,
		"label": "Referer"
	} as FieldItemId,
	value: {
		"name": "value",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Value"
	} as FieldItemNum,
	memo: {
		"name": "memo",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Memo"
	} as FieldItemInt,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.track, fields.item, fields.referer, fields.value, fields.memo, 
];

export const ui: UI = {
	label: "ItemHistory",
	fieldArr,
	fields,
};

const resRaw: Res<any> = {
	$zh: {
	},
	$en: {
	}
};
const res: any = {};
setRes(res, resRaw);

export const t:TFunc = (str:string|JSX.Element): string|JSX.Element => {
	return res[str as string] ?? str;
}

export function render(item: ItemHistory):JSX.Element {
	return <>{uqStringify(item)}</>;
};
