import { UqExt as Uq } from './JkBridge';

function assign(uq:Uq, to:string, from:any): void {
	try {
		Object.assign((uq as any)[to], from);
	}
	catch {}
}
	
export function setUI(uq: Uq) {
}
export * from './JkBridge';
