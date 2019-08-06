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

const TriggeredModal: React.FC<Props & Actions> = ({trigger, ...actions}) => {
	const [active, setActive] = useState<boolean>(false);

	const onClose = () => {
		setActive(false);
		if (actions.cancelAction) actions.cancelAction();

	}
	const onOk = () => {
		setActive(false);
		if (actions.okAction) actions.okAction();
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
					{actions.children}
				</Modal>
				: null}
		</>
	)
}

export default TriggeredModal;