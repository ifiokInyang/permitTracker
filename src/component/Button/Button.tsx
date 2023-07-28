import React from "react";
import { ButtonProps } from "../../utils/interfaces";

const Button = ({ type, className, onClick, text }: ButtonProps) => {
	return (
		<div>
			<button type={type} className={className} onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

export default Button;
