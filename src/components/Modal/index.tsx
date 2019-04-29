import './modal.scss'
import React, { PureComponent, useState, useEffect } from 'react'

interface Props {

}

interface Actions {
	onClose: () => void,
	okAction: () => void
}

const Modal: React.FC<Props & Actions> = (props) => {
	const [sizeAdjustment, setSizeAdjustment] = useState({
		marginTop: "0px",
		marginLeft: "0px"
	})

	const onClose = () => {
		props.onClose();
	}

	const onOk = () => {
		props.okAction();
	}

	useEffect(() => {
		const modalContainer = document.getElementsByClassName("modal-container")[0];
		const width = modalContainer.clientWidth;
		const height = modalContainer.clientHeight;

		setSizeAdjustment({
			marginTop: -(height / 2) + "px",
			marginLeft: -(width / 2) + "px"
		})

		return () => {
			modalContainer.classList.add("show");
		}
	})

	return (
		<div className="modal">
			<div className="modal-backdrop">
				<div style={sizeAdjustment} className="modal-container">
					{React.cloneElement(props.children as any, { closeModal: onClose })}
				</div>
			</div>
		</div>
	)
}

export default Modal
