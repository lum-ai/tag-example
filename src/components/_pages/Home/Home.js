import React, { useState, useRef } from 'react';
import Tag from 'Components/_elements/Tag/Tag';
import Sidebar from 'Components/_modules/Sidebar/Sidebar';
import { Button } from 'Elements/Button/Button';
import { Heading } from 'Elements/Heading/Heading';

import './Home.scss';

import tagData from "Components/_data/test-odin.json"

const Home = () => {
    const [showOptions, setShowOptions] = useState(true);
    const [tagOptions, setTagOptions] = useState({
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
    });

    const tagRef = useRef();

    // Toggle Options (filters) from Sidebar
    const toggleOptions = () => {
        setShowOptions(!showOptions);
        tagRedraw();
    }

    const tagRedraw = () => {
        tagRef.current.redraw();
    }

    const updateOptions = options => {
        setTagOptions({...tagOptions, ...options});
    }

    return (
        <>
            <Sidebar 
                options={ tagOptions } 
                showOptions={ showOptions }
                updateOptions={updateOptions.bind(this)}
            />
            <main>
                <div className="header">
                    <div className="container">
                        <Heading type="h2" className="heading-button">
                            TAG Example
                            <Button onClick={ toggleOptions } buttonStyle="btn-default" buttonSize="btn-small">
                                { showOptions ? 'Hide' : 'Show' } Options <i className="fas fa-bars"/>
                            </Button>

                            <Button onClick={tagRedraw} buttonStyle="btn-default" buttonSize="btn-small">
                                Redraw <i className="fas fa-redo" />
                            </Button>
                        </Heading>
                    </div>
                </div>
                <div className="container">
                    <Tag 
                        ref={tagRef}
                        data={ tagData } 
                        options={ tagOptions }
                    />
                </div>
            </main>
        </>
    )

};

export default Home;