import './triggered-popover.scss';
import React, { PureComponent, Fragment, ReactElement } from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '../Button';


interface Props {
	trigger: ReactElement<any>,
}

interface Actions {
	okAction: () => void,
}

export default class TriggeredPopover extends PureComponent<Props & Actions> {
	state = {
		active: false,
		anchor: null
	}
	handleClick(event: React.MouseEvent<HTMLElement>) {
		this.setState({
			active: !this.state.active,
			anchor: event.currentTarget
		});
	}
	onClose() {
		this.setState({
			active: false
		});
	}
	render() {
		return (
			<Fragment>
				<span onClick={this.handleClick.bind(this)}>
					{this.props.trigger}
				</span>
				{this.state.active ?
					<Popover
						open={true}
						anchorEl={this.state.anchor}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						onClose={this.onClose.bind(this)}>
						<div className="popup-container">
							<div className="popup-input">
								{this.props.children}
							</div>
							<div className="popup-buttons">
								<Button onClick={this.onClose.bind(this)}>Cancel</Button>
								<Button filled onClick={this.props.okAction}>Ok</Button>
							</div>

							
						</div>
					</Popover>
					: null}

			</Fragment>
		)
	}
}
