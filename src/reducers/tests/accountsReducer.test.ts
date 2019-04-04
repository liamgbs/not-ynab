import * as types from '../../actions/types';
import accountsReducer, { defaultState as accountsDefault} from '../accounts';
import { AccountType } from '../../types/accounts';

describe('accounts reducer', () => {
	it('should return the initial state', () => {
		expect(accountsReducer(undefined, {type: "", payload: {}}))
			.toEqual(accountsDefault)
	});

	it('should set active account to 1', () => {
		expect(accountsReducer(undefined, {
			type: types.AccountActionTypes.SET_ACTIVE_ACCOUNT,
			payload: {
				accountIndex: 1
			}
		}).activeAccount).toEqual(1)
	});

	it('should create a new account', () => {
		const testReducer = accountsReducer(undefined, {
			type: types.AccountActionTypes.CREATE_ACCOUNT,
			payload: {
				accountName: "test",
				accountType: AccountType.Current,
				startingBalance: 123
			}
		})

		expect(testReducer.accounts[testReducer.accounts.length - 1]).toEqual({
			accountName: "test",
			type: AccountType.Current,
			onBudget: true,
			closed: false,
			balance: 123,
			deleted: false,
		});

		expect(testReducer.accounts.length)
			.toEqual(accountsDefault.accounts.length + 1)
	})

	it('should adjust balance', () => {
		const testState = {
			accounts: [{
				accountName: "test",
				type: AccountType.Current,
				onBudget: true,
				closed: false,
				balance: 200,
				deleted: false,
			},
			{
				accountName: "dont test",
				type: AccountType.Current,
				onBudget: true,
				closed: false,
				balance: 0,
				deleted: false,
			}],
			activeAccount: 0
		};

		expect(accountsReducer(testState, {
			type: types.AccountActionTypes.ADD_TO_BALANCE,
			payload: {
				accountName: "test",
				amount: 100
			}
		}).accounts[0].balance).toEqual(300)

		expect(accountsReducer(testState, {
			type: types.AccountActionTypes.ADD_TO_BALANCE,
			payload: {
				accountName: "test",
				amount: 100
			}
		}).accounts[1].balance).toEqual(0)

		expect(accountsReducer(testState, {
			type: types.AccountActionTypes.ADD_TO_BALANCE,
			payload: {
				accountName: "test",
				amount: -400
			}
		}).accounts[0].balance).toEqual(-200)

		expect(accountsReducer(testState, {
			type: types.AccountActionTypes.ADD_TO_BALANCE,
			payload: {
				accountName: "test",
				amount: -400
			}
		}).accounts[1].balance).toEqual(0)
		
	})
})