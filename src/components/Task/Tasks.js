import React from 'react';
import directions from '../../img/directions_white_18dp.png';
import bookmark from '../../img/bookmark_border_gm_blue_18dp.png';
import location from '../../img/share_location_gm_blue_18dp.png';
import send_to_mobile from '../../img/send_to_mobile_gm_blue_18dp.png'
import share from '../../img/share_gm_blue_18dp.png'

import './Tasks.css'

const Tasks = () => {

    const state = {
        tasks: [
            {id: 1, name: 'Проложить маршрут', picture: directions, activeTask: true},
            {id: 2, name: 'Сохранить', picture: bookmark, activeTask: false},
            {id: 3, name: 'Искать по близостти', picture: location, activeTask: false},
            {id: 4, name: 'Отправить на телефон', picture: send_to_mobile, activeTask: false},
            {id: 5, name: 'Поделиться', picture: share, activeTask: false},
        ]
    }



    return (
        <div className='tasks'>
            {
                state.tasks.map(task => {
                    return (
                        <div  className='task' key={task.id}>
                            <button className={`button__task ${task.activeTask ? 'active-task' : ''}`}>
                                <img src={task.picture} alt="directions"/>
                            </button>
                            <div className='task__name'>{task.name}</div>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Tasks