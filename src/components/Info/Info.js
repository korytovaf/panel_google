import React, {useEffect, useState} from "react";
import place from "../../img/place_gm_blue_24dp.png";
import './Info.css';
import {Link} from "react-router-dom";
import schedule from '../../img/schedule.png';
import publicSite from '../../img/public.png';
import phone from '../../img/phone.png';
import codePlus from '../../img/ic_plus_code.png';
import verified from '../../img/verified_user.png';
import label from '../../img/label.png';


const Info = () => {

    const state = {
        address: 'Плехановская ул., 29, Воронеж, Воронежская обл., 394018',
        schedule: [
            {id: 1, weekday: 'Понедельник', time: false},
            {id: 2, weekday: 'Вторник', time: {hourOpen: 2, minutesOpen: 30, hourClose: 18, minutesClose: 0}},
            {id: 3, weekday: 'Среда', time: {hourOpen: 10, minutesOpen: 30, hourClose: 18, minutesClose: 0}},
            {id: 5, weekday: 'Пятница', time: {hourOpen: 10, minutesOpen: 30, hourClose: 18, minutesClose: 0}},
            {id: 6, weekday: 'Суббота', time: {hourOpen: 10, minutesOpen: 30, hourClose: 18, minutesClose: 0}},
            {id: 0, weekday: 'Воскресенье', time: {hourOpen: 10, minutesOpen: 30, hourClose: 18, minutesClose: 0}},
        ],
        site: {name: 'museum-vrn.ru', http: 'www.museum-vrn.ru'},
        tel: '+7(473)252-03-95',
        code: 'M58V+M9 Воронеж',
        owner: 'Я владелец компании',
        label: 'Добавить ярлык',
    }

    const nowTime = new Date()
    const [operatingMode, setOperatingMode] = useState(true)

    useEffect(() => {
        state.schedule.map(day => {
            if (day.id === nowTime.getDay()) {
                if (day.time.hourOpen <= nowTime.getHours() && nowTime.getHours() < day.time.hourClose ) {
                    setOperatingMode(false)
                }
            }
        })
    }, [operatingMode, nowTime, state.schedule])


    return (
        <>
            <div className='info-item'>
                <img src={place} alt='place'/>
                <div>{state.address}</div>
            </div>
            <div className='info-item'>
                <img src={schedule} alt='schedule'/>
                <details className={`schedule__content ${operatingMode ? 'closed' : ''}`}>
                    <summary>
                        {
                            state.schedule.map(day => {
                                if (day.id === nowTime.getDay()) {
                                    return (
                                        <div key={day.id} className={operatingMode ? 'textRed' : ''}>
                                            {`${operatingMode ? 'Закрыто' : `${day.time.hourOpen}:${day.time.minutesClose === 0 ? '00' : day.time.minutesClose} - ${day.time.hourClose}:${day.time.minutesClose === 0 ? '00' : day.time.minutesClose}`}`}
                                        </div>
                                    )
                                }
                            })
                        }
                    </summary>
                    <div>
                        {
                            state.schedule.map(day => {
                                return (
                                    <div key={day.id} className='schedule__day'>
                                        <div className='schedule__day-day'>{day.weekday}</div>
                                        <div>
                                            {
                                                day.time.hourOpen
                                                ? `${day.time.hourOpen}:${day.time.minutesClose === 0 ? '00' : day.time.minutesClose} - ${day.time.hourClose}:${day.time.minutesClose === 0 ? '00' : day.time.minutesClose}`
                                                : 'Закрыто'
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </details>
            </div>
            <div className='info-item'>
                <img src={publicSite} alt='public'/>
                <Link to={state.site.http}>{state.site.name}</Link>
            </div>
            <div className='info-item'>
                <img src={phone} alt='phone'/>
                <div>{state.tel}</div>
            </div>
            <div className='info-item'>
                <img src={codePlus} alt='codePlus'/>
                <div>{state.code}</div>
            </div>
            <div className='info-item'>
                <img src={verified} alt='verified'/>
                <div>{state.owner}</div>
            </div>
            <div className='info-item'>
                <img src={label} alt='label'/>
                <div>{state.label}</div>
            </div>
        </>
    );
}

export default Info