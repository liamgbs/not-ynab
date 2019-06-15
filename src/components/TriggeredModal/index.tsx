import './triggered-modal.scss';
import React, { useState } from 'react';
import Modal from '../Modal';

interface Props {
	trigger: React.ReactElement<any>,
}

interface Actions {
	okAction?: () => void,
	cancelAction?: () => void
}

const TriggeredModal: React.FC<Props & Actions> = ({trigger, ...props}) => {
	const [active, setActive] = useState<boolean>(false);

	const onClose = () => {
		setActive(false);
		if (props.cancelAction) props.cancelAction();

	}
	const onOk = () => {
		setActive(false);
		if (props.okAction) props.okAction();
	}
	return (
		<>
			<span onClick={() => setActive(!active)}>
				{trigger}
			</span>
			{active ?
				<Modal
					okAction={onOk}
					onClose={onClose}>
					{props.children}
				</Modal>
				: null}
		</>
	)
}

export default TriggeredModal;