import './new-account-form.scss'

import React, { useState } from 'react';
import Input from '../../components/Input';
import CalculatorInput from '../../components/CalculatorInput';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import { AccountType } from '../../types/accounts';
import { getAllAccountTypes } from '../../utils/helpers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addAccountAction } from '../../actions/accounts';

interface Props {}

interface Actions extends ReturnType<typeof mapDispatchToProps> {
	closeModal?: () => void
}

const NewAccountForm: React.FC<Props & Actions> = (props) => {
	const [accountName, setAccountName] = useState<string>("");
	const [startBalance, setStartBalance] = useState<string>("0.0");
	const [accountType, setAccountType] = useState<string>(AccountType.Current as string)
	
	const onSubmit = () => {
		props.addAccount(accountName, accountType as AccountType, Number(startBalance));

		if (props.closeModal) props.closeModal();
	}
	

	return (
		<div className="new-account-form">
			<div className="new-account-form-item">
				<Input
				name="accountName"
				label="Account Name"
				value={accountName}
				onChange={e => setAccountName(e.target.value)}/>
			</div>

			<div className="new-account-form-item">
				<Dropdown
					value={accountType}
					label="Account Type"
					options={getAllAccountTypes()}
					onChange={e => setAccountType(e.target.value)}/>
			</div>

			<div className="new-account-form-item">
				<CalculatorInput
					name="startBalance"
					label="Starting Balance"
					value={startBalance}
					onBlur={setStartBalance}
					onChange={e => setStartBalance(e.target.value)} />
			</div>

			<Button filled onClick={onSubmit}>
				Add Account
			</Button>
		</div>
	)
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		addAccount: (accountName: string, accountType: AccountType, startBalance: number) =>
			dispatch(addAccountAction(accountName, accountType, startBalance))
	}
}

export default connect(null, mapDispatchToProps)(NewAccountForm)