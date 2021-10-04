import { DebugItem } from "../CBug";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UQs } from "uq-app";
import { Log } from "../Logger";

export const testItem1:DebugItem = {
	name: 'HelloTonva.GetProductStock',
	discription: '{product: 1}',
	test: async ( log: Log, uqs: UQs):Promise<void> => {
		log('test1');
		log('test1');
		log('test1');
		log('test1');
		log('test1');
		log('test1');
		log('test1');
		log('test1');
	}
}