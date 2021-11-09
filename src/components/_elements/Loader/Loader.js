import React from 'react';
import './Loader.scss';

const Loader = ({
    line,
    }) => {

    const content = line ?
        <div className="loader-line" />
        :
        <img className="loader" src="/images/loader.gif" alt=""/>

    return (
        <>
            { content }
        </>
    );
};

export default Loader;
