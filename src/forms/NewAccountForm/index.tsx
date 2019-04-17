import './new-account-form.scss'

import React, { useState } from 'react';
import Input from '../../components/Input';
import CalculatorInput from '../../components/CalculatorInput';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import { AccountType } from '../../types/accounts';
import { getAllAccountTypes } from '../../utils/helpers';

interface Props {

}

interface Actions {
	onSubmit: () => void
}

export function NewAccountForm(props:Props & Actions) {
	const [accountName, setAccountName] = useState<string>("");
	const [startBalance, setStartBalance] = useState<string>("0.0");
	const [accountType, setAccountType] = useState<string>(AccountType.Current as string)


	return (
		<form className="new-account-form">
			<Input
				name="accountName"
				label="Account Name"
				value={accountName}
				onChange={e => setAccountName(e.target.value)}/>

			<Dropdown
				value={accountType}
				label="Account Type"
				options={getAllAccountTypes()}
				onChange={e => setAccountType(e.target.value)}/>

			<CalculatorInput
				name="startBalance"
				label="Starting Balance"
				value={startBalance}
				onBlur={setStartBalance}
				onChange={e => setStartBalance(e.target.value)} />

			<Button onClick={props.onSubmit}>Add Account</Button>
		</form>
	)
}