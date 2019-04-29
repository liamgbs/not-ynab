import './triggered-modal.scss';
import React, { PureComponent, Fragment, ReactElement } from 'react';
import Button from '../Button';
import Modal from '../Modal';

interface Props {
	trigger: ReactElement<any>,
}

interface Actions {
	okAction?: () => void,
	cancelAction?: () => void
}

export default class TriggeredModal extends PureComponent<Props & Actions> {
	state = {
		active: false,
	}
	handleClick = (event: React.MouseEvent<HTMLElement>) => {
		this.setState({
			active: !this.state.active,
			anchor: event.currentTarget
		});
	}
	onClose = () => {		
		this.setState({
			active: false
		});

		if (this.props.cancelAction)
			this.props.cancelAction();

	}
	onOk = () => {
		if (this.props.okAction) {
			this.props.okAction();
		}
		this.onClose();
	}
	render() {
		return (
			<Fragment>
				<span onClick={this.handleClick}>
					{this.props.trigger}
				</span>
				{this.state.active ?
					<Modal
						okAction={this.onOk}
						onClose={this.onClose}>
						{this.props.children}
					</Modal>
					: null}
			</Fragment>
		)
	}
}
