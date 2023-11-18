import { useState } from "react";
import styles from './Resume.module.css';
function Resume () {
    const [color, setColor] = useState('chartreuse');
    const {container, block, name, h2, elem, btn, img, photo, info} = styles;
   
    const divStyles = {
        backgroundColor: color,
    }
    const shColor = () => {
        setColor((prevState) => {
            if(prevState === 'chartreuse') {
                return 'red';
            } else {
                return 'chartreuse';
            }

        });
    }
    return (
        
        <>
            <div style={divStyles} className={block}>
                <div className={container}>
                   <div className={elem}>
                        <div className={photo}>
                            <img className={img} src="https://img.myloview.ru/canvas-prints/profile-icon-vector-male-user-person-avatar-in-flat-color-glyph-pictogram-illustration-700-121123314.jpg" alt="" />
                            <h2 className={name}>Замирбек уулу Санжыбек</h2>
                        </div>
                        <div className={info}>
                            <h2 className={h2}>Цель:</h2>
                            <p>Интересующийся и мотивированный начинающий Frontend разработчик</p>
                            <h2 className={h2}>Образование:</h2>
                            <p>Учусь в RushDevs academy уже пятый месяц</p>
                            <h2 className={h2}>Навыки:</h2>
                            <ul>
                                <li>Знание языков программирования: HTML, CSSб и JavaScript</li>
                                <li>Опыт работы с системой контроля версий Git</li>
                                <li>Опыт работы с основами верстки и стилизации веб-страниц</li>
                                <li>Умею работать с типы данных и запросами</li>
                            </ul>
                            <h2 className={h2}>Проекты:</h2>
                            <h3>Верстка с адаптивом</h3>
                            <h3>Интернет магазин</h3>
                            <button className={btn} onClick={shColor}>CLICK</button>
                        </div>
                   </div>
                </div>
            </div> 
        </>
    )
}
export default Resume