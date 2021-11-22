import React, { useState } from 'react';
import './Sidebar.scss';

import { Heading } from 'Elements/Heading/Heading';
import { Button } from 'Elements/Button/Button';

const Sidebar = (props) => {
    const [tagOptions, setTagOptions] = useState(props.options)

    const categoryOptions = {
        topLinkCategory: {
            none: 'none',
            default: 'default',
        },
        bottomLinkCategory: {
            none: 'none',
            default: 'default',
        },
        topTagCategory: {
            none: 'none',
            default: 'default',
        },
        bottomTagCategory: {
            none: 'none',
            pos: 'POS',
        }
    }

    const handleSubmit = event => {
        const formData = new FormData(event.target);
        event.preventDefault();

        // todo: form handling
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
            setTagOptions({...tagOptions, [key]: value});
        }

        console.log(tagOptions);
    }

    return (
        <>
            <div className={`sidebar ${props.showOptions ? '' : 'sidebar-hidden'}`}>
                <div className="sidebar-container">
                    <Heading type="h3">Options</Heading>

                    <form onSubmit={ handleSubmit } action="">
                        {/*  Category Options */}
                        <div className="input-field">
                            <label htmlFor="topLinkCategory">Top Link Category</label>
                            <select name="topLinkCategory" id="topLinkCategory" defaultValue={props.options.topLinkCategory}>
                                {
                                    Object.keys(categoryOptions.topLinkCategory).map((key) => {
                                        return <option key={key} value={key}>{categoryOptions.topLinkCategory[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="bottomLinkCategory">Bottom Link Category</label>
                            <select name="bottomLinkCategory" id="bottomLinkCategory" defaultValue={props.options.bottomLinkCategory}>
                                {
                                    Object.keys(categoryOptions.bottomLinkCategory).map((key) => {
                                        return <option key={key} value={key}>{categoryOptions.bottomLinkCategory[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="topTagCategory">Top Tag Category</label>
                            <select name="topTagCategory" id="topTagCategory" defaultValue={props.options.topTagCategory}>
                                {
                                    Object.keys(categoryOptions.topTagCategory).map((key) => {
                                        return <option key={key} value={key}>{categoryOptions.topTagCategory[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="bottomTagCategory">Bottom Tag Category</label>
                            <select name="bottomTagCategory" id="bottomTagCategory" defaultValue={props.options.bottomTagCategory}>
                                {
                                    Object.keys(categoryOptions.bottomTagCategory).map((key) => {
                                        return  <option key={key} value={key}>{categoryOptions.bottomTagCategory[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                        {/* Display Options */}
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="compactRows" id="compactRows" defaultValue="true"/>
                            <label htmlFor="compactRows">Compact Rows</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="showTopLinksOnMove" id="showTopLinksOnMove" defaultValue="true"/>
                            <label htmlFor="showTopLinksOnMove">Show Top Links on Move</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="showBottomLinksOnMove" id="showBottomLinksOnMove" defaultValue="true"/>
                            <label htmlFor="showBottomLinksOnMove">Show Bottom Links on Move</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input defaultChecked type="checkbox" name="showTopMainLabel" id="showTopMainLabel" defaultValue="true"/>
                            <label htmlFor="showTopMainLabel">Show Top Main Label</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="showTopArgLabels" id="showTopArgLabels" defaultValue="true"/>
                            <label htmlFor="showTopArgLabels">Show Top Arguments Labels</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input defaultChecked type="checkbox" name="showBottomMainLabel" id="showBottomMainLabel" defaultValue="true"/>
                            <label htmlFor="showBottomMainLabel">Show Bottom Main Label</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="showBottomArgLabels" id="showBottomArgLabels" defaultValue="true"/>
                            <label htmlFor="showBottomArgLabels">Show Bottom Arguments Labels</label>
                        </div>
                        {/* Spacing Options */}
                        <div className="input-field input-field-inline">
                            <label htmlFor="rowEdgePadding">Row Edge Padding</label>
                            <input type="number" name="rowEdgePadding" id="rowEdgePadding" defaultValue={props.options.rowEdgePadding} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="rowVerticalPadding">Row Vertical Padding</label>
                            <input type="number" name="rowVerticalPadding" id="rowVerticalPadding" defaultValue={props.options.rowVerticalPadding} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="rowExtraTopPadding">Row Extra Top Padding</label>
                            <input type="number" name="rowExtraTopPadding" id="rowExtraTopPadding" defaultValue={props.options.rowExtraTopPadding} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordPadding">Word Padding</label>
                            <input type="number" name="wordPadding" id="wordPadding" defaultValue={props.options.wordPadding} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordPunctPadding">Word Point Padding</label>
                            <input type="number" name="wordPunctPadding" id="wordPunctPadding" defaultValue={props.options.wordPunctPadding} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordTopTagPadding">Word Top Tag Padding</label>
                            <input type="number" name="wordTopTagPadding" id="wordTopTagPadding" defaultValue={props.options.wordTopTagPadding} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordBottomTagPadding">Word Bottom Tag Padding</label>
                            <input type="number" name="wordBottomTagPadding" id="wordBottomTagPadding" defaultValue={props.options.wordBottomTagPadding} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordTagLineLength">Word Tag Line Length</label>
                            <input type="number" name="wordTagLineLength" id="wordTagLineLength" defaultValue={props.options.wordTagLineLength} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordBraceThreshold">Word Brace Threshold</label>
                            <input type="number" name="wordBraceThreshold" id="wordBraceThreshold" defaultValue={props.options.wordBraceThreshold} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="linkSlotInterval">Link Slot Interval</label>
                            <input type="number" name="linkSlotInterval" id="linkSlotInterval" defaultValue={props.options.linkSlotInterval} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="linkHandlePadding">Link Handle Padding</label>
                            <input type="number" name="linkHandlePadding" id="linkHandlePadding" defaultValue={props.options.linkHandlePadding} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="linkCurveWidth">Link Curve Width</label>
                            <input type="number" name="linkCurveWidth" id="linkCurveWidth" defaultValue={props.options.linkCurveWidth} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="linkArrowWidth">Link Arrow Width</label>
                            <input type="number" name="linkArrowWidth" id="linkArrowWidth" defaultValue={props.options.linkArrowWidth} placeholder="0"/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="tagDefaultColours">Tag Default Colours</label>
                            <input type="color" name="tagDefaultColours" id="tagDefaultColours" defaultValue={props.options.tagDefaultColours}/>
                        </div>
                        <div className="text-right">
                            <Button type="submit" buttonSize="btn-full">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Sidebar;