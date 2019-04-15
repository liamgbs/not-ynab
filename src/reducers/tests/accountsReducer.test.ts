import * as AccountActions from '../../actions/accounts'
import accountsReducer, { defaultState as accountsDefault } from '../accounts';
import { AccountType } from '../../types/accounts';

describe('accounts reducer', () => {
	it('should return the initial state', () => {
		expect(accountsReducer(undefined, { type: undefined }))
			.toEqual(accountsDefault)
	});

	it('should set active account to 1', () => {
		expect(accountsReducer(undefined, AccountActions.setActiveAccountAction(1))
			.activeAccount).toEqual(1)
	});

	it('should create a new account', () => {
		const testReducer = accountsReducer(undefined, 
			AccountActions.addAccountAction("test", AccountType.Current, 123))

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

		expect(accountsReducer(testState,
			AccountActions.addToBalanceAction("test", 100)).accounts[0].balance)
			.toEqual(300)

		expect(accountsReducer(testState,
			AccountActions.addToBalanceAction("test", -400)).accounts[0].balance)
			.toEqual(-200)
	})
})