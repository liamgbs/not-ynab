import './triggered-popover.scss';
import React, { PureComponent, Fragment, ReactElement } from 'react';
import Popover from '@material-ui/core/Popover';


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
				<button onClick={this.handleClick.bind(this)}>
					{this.props.trigger}
				</button>
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
								<button onClick={this.onClose.bind(this)}>Cancel</button>
								<button onClick={this.props.okAction}>Ok</button>
							</div>

							
						</div>
					</Popover>
					: null}

			</Fragment>
		)
	}
}
