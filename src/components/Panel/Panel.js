import React, {useState} from 'react';
import './Panel.css';
import photo from '../../img/2019-08-21.jpg'
import Search from "../Search/Search";
import Rating from "../common/Rating/Rating";
import Tasks from "../Task/Tasks";
import Info from "../Info/Info";

const Panel = () => {

    const [active, setActive] = useState(false)

    const showPanel = !active ? 'panel' : "panel active"

    return (
        <div className={showPanel}>
            <button onClick={() => setActive(!active)} className='panel__show'>{!active ? 'показать' : 'скрыть'}</button>
            <div className='panel__wrapper'>
                <Search />
                <img className='panel__photo' src={photo} alt="фото организации"/>
                <div className='pane__header-block'>
                    <h1 className='panel__header'>Воронежский областной краеведческий музей</h1>
                    <Rating />
                </div>
                <Tasks />
                <div className='informing-block'>
                    <div className='informing-block__wrapper'>
                        <h2>Уточните информацию в организации</h2>
                        <p>Из-за пандемии COVID-19 данные о часах работы и услугах могут быть неточными.</p>
                    </div>
                </div>
                <Info />

            </div>



        </div>
    );
}

export default Panel