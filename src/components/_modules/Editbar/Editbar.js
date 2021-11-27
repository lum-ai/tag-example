import React, { useState, useEffect } from 'react';
import {Button} from 'Elements/Button/Button';
import './Editbar.scss';

// Tags parsers
import MultipleMentionsOdin from "Components/_data/multiple-mentions-odin.json";
import Odin from "Components/_data/test-odin.json";
import Odin2 from "Components/_data/test-odin.json";
import ParagraphOdin1 from "Components/_data/paragraph-1-odin.json";
import PassageOdin1 from "Components/_data/passage-1-odin.json";
import PassageOdin2 from "Components/_data/passage-2-odin.json";
import SentenceOdin1 from "Components/_data/sentence-1-odin.json";
import SentenceOdin2 from "Components/_data/sentence-2-odin.json";
import SentenceOdin3 from "Components/_data/sentence-3-odin.json";
import SentenceOdinson1 from "Components/_data/sentence-odinson-1.json";
import SentenceOdinson2 from "Components/_data/sentence-odinson-2.json";

const Editbar = (props) => {
    const initialParser = ['Odin', Odin];
    const [activeParser, setActiveParser] = useState(initialParser[0]);
    const [activeDataParser, setActiveDataParser] = useState(JSON.stringify(initialParser[1], undefined, 4));


    useEffect(() => {
        props.updateParser(JSON.parse(activeDataParser));
    }, [activeDataParser]);

    const tagParsers = {
        MultipleMentionsOdin: 'Multiple Mentions Odin',
        Odin: 'Odin ',
        Odin2: 'Odin 2',
        ParagraphOdin1: 'Paragraph Odin 1',
        PassageOdin1: 'Passage Odin 1',
        PassageOdin2: 'Passage Odin 2',
        SentenceOdin1: 'Sentence Odin 1',
        SentenceOdin2: 'Sentence Odin 2',
        SentenceOdin3: 'Sentence Odin 3',
        SentenceOdinson1: 'Sentence Odinson 1',
        SentenceOdinson2: 'Sentence Odinson 2',
    }

    const changeParser = (e) => {
        setActiveParser(e.target.value);
        // eslint-disable-next-line default-case
        switch(e.target.value) {
            case 'MultipleMentionsOdin':
                setActiveDataParser(JSON.stringify(MultipleMentionsOdin, undefined, 4));
                break;
            case 'Odin':
                setActiveDataParser(JSON.stringify(Odin, undefined, 4));
                break;
            case 'Odin2':
                setActiveDataParser(JSON.stringify(Odin2, undefined, 4));
                break;
            case 'ParagraphOdin1':
                setActiveDataParser(JSON.stringify(ParagraphOdin1, undefined, 4));
                break;
            case 'PassageOdin1':
                setActiveDataParser(JSON.stringify(PassageOdin1, undefined, 4));
                break;
            case 'PassageOdin2':
                setActiveDataParser(JSON.stringify(PassageOdin2, undefined, 4));
                break;
            case 'SentenceOdin1':
                setActiveDataParser(JSON.stringify(SentenceOdin1, undefined, 4));
                break;
            case 'SentenceOdin2':
                setActiveDataParser(JSON.stringify(SentenceOdin2, undefined, 4));
                break;
            case 'SentenceOdin3':
                setActiveDataParser(JSON.stringify(SentenceOdin3, undefined, 4));
                break;
            case 'SentenceOdinson1':
                setActiveDataParser(JSON.stringify(SentenceOdinson1, undefined, 4));
                break;
            case 'SentenceOdinson2':
                setActiveDataParser(JSON.stringify(SentenceOdinson2, undefined, 4));
                break;
        }
    }

    const changeTextarea = (e) => {
        setActiveDataParser(e.target.value);
    }

    const handleSubmit = (e) => {
        props.updateParser(JSON.parse(activeDataParser));
    }

    return (
        <>
            <div className={`editbar ${props.showEditbar ? '' : 'editbar-hidden'}`}>
                <div className="editbar-top">
                    <div className="container">
                        <div className="input-field">
                            <label htmlFor="parserSelector">Parser Selector</label>
                            <select name="parserSelector" id="parserSelector" onChange={ changeParser } defaultValue={activeParser}>
                                {
                                    Object.keys(tagParsers).map((key) => {
                                        return <option key={key} value={key}>{tagParsers[key]}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="editbar-container">
                    <Button className="editbar-btn" buttonSize="btn-small" onClick={ handleSubmit }>SAVE JSON</Button>
                    <textarea className="editbar-textarea"
                              value={ activeDataParser }
                              onChange={ changeTextarea }
                    />
                </div>
            </div>
        </>
    );
};

export default Editbar;
