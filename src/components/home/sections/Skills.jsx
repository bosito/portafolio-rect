import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import list_name_skils from '../../../config/list_name_skils'

//styles
import '../../../styles/skills.css';


export default function Skills() {
    const [listSkills, setListSkills] = useState([]);
    const [selectSection, setSelectSection] = useState(true);

    useEffect(() => {

        if (list_name_skils) {
            setListSkills(list_name_skils);
        };

    }, []);

    return (
        <Element className="skills" id='3'>
            <div className='card_data_skill'>
                <div className='header_skill' >
                    <button className='header_button' onClick={() => setSelectSection(true)}>
                        skills
                    </button>
                    <button className='header_button' onClick={() => setSelectSection(false)}>
                        about me
                    </button>
                </div>
                {
                    selectSection ?
                        <div className='list_skils' >
                            {
                                listSkills.map((skil) => {
                                    return (
                                        <div className='card_skill' >
                                            <p>{skil.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        null
                }

            </div>
        </Element>
    );
};
