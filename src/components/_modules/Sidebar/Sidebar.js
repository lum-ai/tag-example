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
            POS: 'POS',
        }
    }

    const handleChange = event => {
        const itemName = event.target.name;
        let itemValue;

        switch(event.target.type) {
            case 'checkbox':
            case 'radio':
                itemValue = event.target.checked
                break;
            case 'number':
                itemValue = Number(event.target.value);
                break;
            default:
                itemValue = event.target.value;
                break;
        }
        setTagOptions({...tagOptions, [itemName]:itemValue})
    }

    const handleSubmit = event => {
        event.preventDefault();

        // todo: form handling

        console.log(tagOptions);
    }

    return (
        <>
            <div className={`sidebar ${props.showOptions ? '' : 'sidebar-hidden'}`}>
                <div className="sidebar-container">
                    <Heading type="h3">Options</Heading>

                    {/* todo: for a better usability, a form field component (_element) should be created */}

                    <form onSubmit={ handleSubmit } action="">
                        {/*  Category Options */}
                        <div className="input-field">
                            <label htmlFor="topLinkCategory">Top Link Category</label>
                            <select name="topLinkCategory" id="topLinkCategory" defaultValue={props.options.topLinkCategory} onChange={handleChange}>
                                {
                                    Object.keys(categoryOptions.topLinkCategory).map((key) => {
                                        return <option key={key} value={key}>{categoryOptions.topLinkCategory[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="bottomLinkCategory">Bottom Link Category</label>
                            <select name="bottomLinkCategory" id="bottomLinkCategory" defaultValue={props.options.bottomLinkCategory} onChange={handleChange}>
                                {
                                    Object.keys(categoryOptions.bottomLinkCategory).map((key) => {
                                        return <option key={key} value={key}>{categoryOptions.bottomLinkCategory[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="topTagCategory">Top Tag Category</label>
                            <select name="topTagCategory" id="topTagCategory" defaultValue={props.options.topTagCategory} onChange={handleChange}>
                                {
                                    Object.keys(categoryOptions.topTagCategory).map((key) => {
                                        return <option key={key} value={key}>{categoryOptions.topTagCategory[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="bottomTagCategory">Bottom Tag Category</label>
                            <select name="bottomTagCategory" id="bottomTagCategory" defaultValue={props.options.bottomTagCategory} onChange={handleChange}>
                                {
                                    Object.keys(categoryOptions.bottomTagCategory).map((key) => {
                                        return  <option key={key} value={key}>{categoryOptions.bottomTagCategory[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                        {/* Display Options */}
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="compactRows" id="compactRows" defaultValue={props.options.compactRows} onChange={handleChange}/>
                            <label htmlFor="compactRows">Compact Rows</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="showTopLinksOnMove" id="showTopLinksOnMove" defaultValue={props.options.showTopLinksOnMove} onChange={handleChange}/>
                            <label htmlFor="showTopLinksOnMove">Show Top Links on Move</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="showBottomLinksOnMove" id="showBottomLinksOnMove" defaultValue={props.options.showBottomLinksOnMove} onChange={handleChange}/>
                            <label htmlFor="showBottomLinksOnMove">Show Bottom Links on Move</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input defaultChecked type="checkbox" name="showTopMainLabel" id="showTopMainLabel" defaultValue={props.options.showTopMainLabel} onChange={handleChange}/>
                            <label htmlFor="showTopMainLabel">Show Top Main Label</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="showTopArgLabels" id="showTopArgLabels" defaultValue={props.options.showTopArgLabels} onChange={handleChange}/>
                            <label htmlFor="showTopArgLabels">Show Top Arguments Labels</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input defaultChecked type="checkbox" name="showBottomMainLabel" id="showBottomMainLabel" defaultValue={props.options.showBottomMainLabel} onChange={handleChange}/>
                            <label htmlFor="showBottomMainLabel">Show Bottom Main Label</label>
                        </div>
                        <div className="input-field input-checkbox">
                            <input type="checkbox" name="showBottomArgLabels" id="showBottomArgLabels" defaultValue={props.options.showBottomArgLabels} onChange={handleChange}/>
                            <label htmlFor="showBottomArgLabels">Show Bottom Arguments Labels</label>
                        </div>
                        {/* Spacing Options */}
                        <div className="input-field input-field-inline">
                            <label htmlFor="rowEdgePadding">Row Edge Padding</label>
                            <input type="number" name="rowEdgePadding" id="rowEdgePadding" defaultValue={props.options.rowEdgePadding} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="rowVerticalPadding">Row Vertical Padding</label>
                            <input type="number" name="rowVerticalPadding" id="rowVerticalPadding" defaultValue={props.options.rowVerticalPadding} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="rowExtraTopPadding">Row Extra Top Padding</label>
                            <input type="number" name="rowExtraTopPadding" id="rowExtraTopPadding" defaultValue={props.options.rowExtraTopPadding} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordPadding">Word Padding</label>
                            <input type="number" name="wordPadding" id="wordPadding" defaultValue={props.options.wordPadding} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordPunctPadding">Word Point Padding</label>
                            <input type="number" name="wordPunctPadding" id="wordPunctPadding" defaultValue={props.options.wordPunctPadding} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordTopTagPadding">Word Top Tag Padding</label>
                            <input type="number" name="wordTopTagPadding" id="wordTopTagPadding" defaultValue={props.options.wordTopTagPadding} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordBottomTagPadding">Word Bottom Tag Padding</label>
                            <input type="number" name="wordBottomTagPadding" id="wordBottomTagPadding" defaultValue={props.options.wordBottomTagPadding} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordTagLineLength">Word Tag Line Length</label>
                            <input type="number" name="wordTagLineLength" id="wordTagLineLength" defaultValue={props.options.wordTagLineLength} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="wordBraceThreshold">Word Brace Threshold</label>
                            <input type="number" name="wordBraceThreshold" id="wordBraceThreshold" defaultValue={props.options.wordBraceThreshold} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="linkSlotInterval">Link Slot Interval</label>
                            <input type="number" name="linkSlotInterval" id="linkSlotInterval" defaultValue={props.options.linkSlotInterval} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="linkHandlePadding">Link Handle Padding</label>
                            <input type="number" name="linkHandlePadding" id="linkHandlePadding" defaultValue={props.options.linkHandlePadding} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="linkCurveWidth">Link Curve Width</label>
                            <input type="number" name="linkCurveWidth" id="linkCurveWidth" defaultValue={props.options.linkCurveWidth} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="linkArrowWidth">Link Arrow Width</label>
                            <input type="number" name="linkArrowWidth" id="linkArrowWidth" defaultValue={props.options.linkArrowWidth} placeholder="0" onChange={handleChange}/>
                        </div>
                        <div className="input-field input-field-inline">
                            <label htmlFor="tagDefaultColours">Tag Default Colours</label>
                            <input type="color" name="tagDefaultColours" id="tagDefaultColours" defaultValue={props.options.tagDefaultColours} onChange={handleChange}/>
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
