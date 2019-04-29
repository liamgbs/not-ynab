import './modal.scss'
import React, { PureComponent } from 'react'

interface Props {

}

interface Actions {
	onClose: () => void,
	okAction: () => void
}

export default class Modal extends PureComponent<Props & Actions> {
	state = {
		sizeAdjustment: {
			marginTop: "0px",
			marginLeft: "0px"
		}
	}
	render() {
		const { sizeAdjustment } = this.state;
		return (
			<div className="modal">
				<div className="modal-backdrop">
					<div style={sizeAdjustment} className="modal-container">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
	onClose() {
		this.props.onClose();
	}

	onOk() {
		this.props.okAction();
	}

	componentDidMount() {
		const modalContainer = document.getElementsByClassName("modal-container")[0];
		const width = modalContainer.clientWidth;
		const height = modalContainer.clientHeight;

		this.setState({
			sizeAdjustment: {
				marginTop: -(height / 2) + "px",
				marginLeft: -(width / 2) + "px"
			}
		})
	}
}
