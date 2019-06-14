import './triggered-popover.scss';
import React, { useState, ReactElement } from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '../Button';

interface Props {
	trigger: ReactElement<any>,
}

interface Actions {
	okAction: () => void,
}

const TriggeredPopover: React.FC<Props & Actions> = ({trigger, ...props}) => {
	const [active, setActive] = useState<boolean>(false)
	const [anchor, setAnchor] = useState<EventTarget | null>(null)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setActive(!active);
		setAnchor(event.currentTarget)
	}

	const onOk = () => {
		props.okAction();
		setActive(false)
	}

	const onClose = () => {
		setActive(false);
	}
		return (
			<>
				<span onClick={handleClick}>
					{trigger}
				</span>
				{active ?
					<Popover
						open={true}
						anchorEl={anchor as HTMLElement}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						onClose={onClose}>
						<div className="popup">
							<div className="popup-content">
								{props.children}
							</div>
							<div className="popup-buttons">
								<Button onClick={onClose}>Cancel</Button>
								<Button filled onClick={onOk}>Ok</Button>
							</div>
						</div>
					</Popover>
					: null}

			</>
		)
}

export default TriggeredPopover;