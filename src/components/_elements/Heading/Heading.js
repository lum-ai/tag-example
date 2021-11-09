import React from 'react';

import './Heading.scss';

export const Heading = ({
    type,
    align,
    className,
    children,
}) => {
    const Type = type;

    return(
        <Type style={{ textAlign: align }} className={ className }>
            {children}
        </Type>
    )
}