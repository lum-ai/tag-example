import React, { Component } from 'react';
import Tag from 'Components/_elements/Tag/tag';

import './Home.scss';

import tagData from "Components/_data/test-odin.json"

class Home extends Component {
    state = {
        tagOptions: {
            topLinkCategory: "default",
            bottomLinkCategory: "none",
            topTagCategory: "default",
            bottomTagCategory: "POS",
            compactRows: false,
            showTopLinksOnMove: false,
            showBottomLinksOnMove: false,
            showTopMainLabel: true,
            showTopArgLabels: false,
            showBottomMainLabel: true,
            showBottomArgLabels: false,
            rowEdgePadding: 10,
            rowVerticalPadding: 20,
            rowExtraTopPadding: 10,
            wordPadding: 10,
            wordPunctPadding: 2,
            wordTopTagPadding: 10,
            wordBottomTagPadding: 0,
            wordTagLineLength: 9,
            wordBraceThreshold: 100,
            linkSlotInterval: 40,
            linkHandlePadding: 2,
            linkCurveWidth: 5,
            linkArrowWidth: 5,
            tagDefaultColours: ["#ff3366"]
        },
    }

    render() {
        return (
            <div>
                <h1>TAG Example</h1>
                <Tag data={tagData} options={this.state.tagOptions}/>
            </div>
        )
    };
};

export default Home;
