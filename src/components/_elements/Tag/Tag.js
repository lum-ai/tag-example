import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import {default as TagLibrary} from "text-annotation-graphs";

import "text-annotation-graphs/dist/tag/css/tag.min.css"
import "./Tag.scss"

const Tag = forwardRef((props, tagRef) => {
    const ref = useRef();
    let instance = null;

    useImperativeHandle(tagRef, () => ({
        redraw() {
            if (instance) {
                instance.clear();
                instance.init();
                instance.draw();
            }
        },
        reload() {
            if (instance) {
                // this.instance.resize();
                tagRef.current.redraw();
            }
        }
    }));

    // const reload = () => {
    //     if (instance) {
    //         // this.instance.resize();
    //         tagRef.current.redraw();
    //     }
    // }

    const update = () => {
        if (this.instance) {
            for (let option in this.props.options) {
                this.instance.setOption(option, this.props.options[option]);
            }

            tagRef.current.redraw();
        }
    }

    useEffect(() => {
        if (!instance) {
            instance = TagLibrary.tag({
                container: ref.current,
                data: props.data,
                format: "odin",

                options: { ...props.options }
            });
        }
    });

    return (
        <div className="tag">
            <div className="tag-svg" ref={ref}/>
        </div>
    );
});

export default Tag;