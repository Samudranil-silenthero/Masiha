  
import React, { useState, useEffect, Fragment } from 'react';

export default function AlertMessage({ msg, type }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (msg) {
            setShow(true);
            setInterval(() => {
                setShow(false);
            }, 4000);
        }
    }, [msg]);
    return <Fragment>
        {show && <div className={`alert alert-${type}`}>{msg}</div>}
    </Fragment>;
}