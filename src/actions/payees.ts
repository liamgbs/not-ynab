import { PayeesActionTypes } from "./types";

export function addNewPayeeAction(payeeName: string) {
	return {
		type: PayeesActionTypes.ADD_PAYEE,
		payload: {
			payeeName
		}
	}
}