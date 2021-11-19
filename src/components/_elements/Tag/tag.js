import React, { Component } from "react";
import TAG from "text-annotation-graphs";

import "text-annotation-graphs/dist/tag/css/tag.min.css"
import "./tag.sass"

class Tag extends Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.instance = null;
    }

    state = {

    }

    redraw() {
        if (this.instance) {
            this.instance.clear();
            this.instance.init();
            this.instance.draw();
        }
    }

    reload() {
        if (this.instance) {
            // this.instance.resize();
            this.redraw();
        }
    }

    update() {
        if (this.instance) {
            for (let option in this.props.options) {
                this.instance.setOption(option, this.props.options[option]);
            }

            this.redraw();
        }
    }

    componentDidUpdate() {
        this.update();
    }

    componentDidMount() {
        setTimeout(() => {
            const tagEl = TAG.tag({
                container: this.ref.current,
                data: this.props.data,
                format: "odin",

                options: {...this.props.options}
            });
            this.instance = tagEl;
        });
    }

    render() {
        return (
            <div className="tag">
                <div className="tag-svg" ref={this.ref} style={{ width: "100%" }}></div>
            </div>
        );
    }
}

export default Tag;