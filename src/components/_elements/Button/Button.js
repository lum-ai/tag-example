import React from 'react';

import './Button.scss';

const STYLES = ['btn-primary', 'btn-primary-text', 'btn-default', 'btn-default-text', 'btn-black', 'btn-black-text', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-small', 'btn-large', 'unspecified'];

export const Button = ({
    children,
    buttonStyle,
    buttonSize,
    loading,
    ...rest
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${loading === true ? 'loading' : ''}`}
            {...rest}>
            {children}
        </button>
    )
};