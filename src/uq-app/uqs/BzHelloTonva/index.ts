import { UqExt as Uq } from './BzHelloTonva';
import * as Customer from './Customer.ui';
import * as OrderMaster from './OrderMaster.ui';
import * as OrderDetail from './OrderDetail.ui';
import * as Tag from './Tag.ui';
import * as Staff from './Staff.ui';
import * as Achieve from './Achieve.ui';
import * as Hours from './Hours.ui';
import * as CustomerTag from './CustomerTag.ui';
import * as UserStaff from './UserStaff.ui';

function assign(uq:Uq, to:string, from:any): void {
	try {
		Object.assign((uq as any)[to], from);
	}
	catch {}
}
	
export function setUI(uq: Uq) {
	assign(uq, 'Customer', Customer);
	assign(uq, 'OrderMaster', OrderMaster);
	assign(uq, 'OrderDetail', OrderDetail);
	assign(uq, 'Tag', Tag);
	assign(uq, 'Staff', Staff);
	assign(uq, 'Achieve', Achieve);
	assign(uq, 'Hours', Hours);
	assign(uq, 'CustomerTag', CustomerTag);
	assign(uq, 'UserStaff', UserStaff);
}
export * from './BzHelloTonva';
