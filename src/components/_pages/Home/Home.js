import React, { Component } from 'react';
import Tag from 'Components/_elements/Tag/tag';

import './Home.scss';

import tagData from "Components/_data/test-odin.json"

class Home extends Component {
    /**
     * @property {String|"none"} topLinkCategory="default"
     *   The category of {@link Link} to show above the text.
     * @property {String|"none"} bottomLinkCategory="none"
     *   The category of {@link Link} to show below the text.
     *
     * @property {String|"none"} topTagCategory="default"
     *   The category of {@link WordTag} to show above the text.
     * @property {String|"none"} bottomTagCategory="POS"
     *   The category of {@link WordTag} to show below the text.
     *
     * @property {Boolean} compactRows=false
     *   Whether or not to lock every {@link Row} to its minimum height.
     *
     * @property {Boolean} showTopLinksOnMove=true
     *   Continue to display top {@link Link}s when the user drags {@link
     *   Word Words} around.
     * @property {Boolean} showBottomLinksOnMove=true
     *   Continue to display bottom {@link Link}s when the user drags {@link
     *   Word Words} around.
     *
     * @property {Boolean} showTopMainLabel=true
     *   Display the main type label for top {@link Link Links}.
     * @property {Boolean} showTopArgLabels=false
     *   Display the type labels for each argument for top {@link Link Links}.
     * @property {Boolean} showBottomMainLabel=true
     *   Display the main type label for bottom {@link Link Links}.
     * @property {Boolean} showBottomArgLabels=false
     *   Display the type labels for each argument for bottom {@link Link Links}.
     *
     * @property {Number} rowEdgePadding=10
     *   Padding on the left/right edges of each {@link Row}.
     * @property {Number} rowVerticalPadding=20
     *   Padding on the top/bottom of each {@link Row}.
     * @property {Number} rowExtraTopPadding=10
     *   Extra padding on {@link Row} top for {@link Link} labels.<br>
     *   (Labels for top Links are drawn above their line, and it is not trivial
     *   to get a good value for how high they are, so swe use a pre-configured
     *   value here.)
     *
     * @property {Number} wordPadding=10
     *   Padding on the left of {@link Word Words}.
     * @property {Number} wordPunctPadding=2
     *   Padding on the left of {@link Word Words} that contain a single
     *   punctuation character.
     * @property {Number} wordTopTagPadding=10
     *   Padding between {@link Word Words} and the {@link WordTag WordTags}
     *   drawn above them.
     * @property {Number} wordBottomTagPadding=0
     *   Padding between {@link Word Words} and the {@link WordTag WordTags}
     *   drawn below them.
     * @property {Number} wordTagLineLength=9
     *   For {@link WordTag WordTags} drawn above {@link Word Words}, the height
     *   of the connecting line/brace between the {@link Word} and the
     *   {@link WordTag}.
     * @property {Number} wordBraceThreshold=100
     *   {@link Word Words} that are wider than this will have curly braces
     *   drawn between them and their {@link WordTag WordTags} (rather than a
     *   single vertical line).
     *
     * @property {Number} linkSlotInterval=40
     *   Vertical distance between each overlapping {@link Link} slot.
     * @property {Number} linkHandlePadding=2
     *   Vertical padding between {@link Link} handles and their anchors.
     * @property {Number} linkCurveWidth=5
     *   Corner curve width for {@link Link} lines.
     * @property {Number} linkArrowWidth=5
     *   Width of arrowheads for {@link Link} handles.
     *
     * @property {String[]} tagDefaultColours=...
     *   The first *n* default colours to use for {@link WordTag WordTags} (as a
     *   queue).  After this array is exhausted, {@link WordTag WordTags} will
     *   be assigned random colours by default.<br>
     *   See the source for the pre-configured default values.
     */
    state = {
        tagOptions: {
            wordTopTagPadding: 30,
            wordPadding: 30,
            wordPunctPadding: 10,
            rowEdgePadding: 50,
            rowVerticalPadding: 50,
            compactRows: false,
            showTopLinksOnMove: false,
            showBottomLinksOnMove: false,
            rowExtraTopPadding: 20,
            wordBottomTagPadding: 20,
            wordTagLineLength: 20,
            wordBraceThreshold: 100,
            linkSlotInterval: 50,
            linkHandlePadding: 10,
            linkCurveWidth: 10,
            linkArrowWidth: 10,
            tagDefaultColours: ["#f90", "#acf", "##f33", "#3f3"]
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
