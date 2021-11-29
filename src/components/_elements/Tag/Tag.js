import React, { useEffect, useRef, forwardRef, useImperativeHandle, useCallback } from "react";
import {default as TagLibrary} from "text-annotation-graphs";

import "text-annotation-graphs/dist/tag/css/tag.min.css"
import "./Tag.scss"

let instance = null;
const Tag = forwardRef((props, tagRef) => {
    const ref = useRef();

    useImperativeHandle(tagRef, () => ({
        redraw() {
            initialize();
            if (instance) {
                instance.redraw();
            }
        },
        reload() {
            if (instance) {
                // TODO: reload tag
                tagRef.current.redraw();
            }
        }
    }));

    const initialize = useCallback(() => {
        // make sure the div is clean
        while (ref.current.firstChild) {
            ref.current.removeChild(ref.current.firstChild);
        }

        // initialize the tag instance
        try {
            instance = TagLibrary.tag({
                container: ref.current,
                data: props.data,
                format: "odin",

                options: { ...props.options }
            });
        } catch(err) {
            // TODO: treat error here
        }

    }, [props])

    const update = useCallback(() => {
        if (instance) {
            for (let option in props.options) {
                instance.setOption(option, props.options[option]);
            }

            tagRef.current.redraw();
        }
    }, [props, tagRef])

    useEffect(() => {
        if (!instance) {
            initialize();
        } else {
            update();
        }
    }, [initialize, update]);

    return (
        <div className="tag">
            <div className="tag-svg" ref={ref}/>
        </div>
    );
});

export default Tag;