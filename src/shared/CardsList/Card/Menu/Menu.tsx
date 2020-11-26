import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateRandomString} from "../../../../utils/react/generateRandomIndex";


// const LIST = [
//     {As: 'li' as const, text: 'Комментарии'},
//     {As: 'li' as const, text: 'Поделиться'},
//     {As: 'li' as const, text: 'Скрыть'},
//     {As: 'li' as const, text: 'Сохранить'},
//     {As: 'li' as const, text: 'Пожаловаться'},
//     {As: 'li' as const, text: 'Закрыть'},
// ].map(generateId)

const LIST = [
    {As: 'li' as const, text: 'Комментарии', className: 'menu__item menu__comments'},
    {As: 'li' as const, text: 'Поделиться', className: 'menu__item menu__share'},
    {As: 'li' as const, text: 'Скрыть', className: 'menu__item menu__hidden'},
    {As: 'li' as const, text: 'Сохранить', className: 'menu__item menu__save'},
    {As: 'li' as const, text: 'Пожаловаться', className: 'menu__item menu__complaint'},
    {As: 'li' as const, text: 'Закрыть', className: 'menu__item menu__close'},
].map((item) => ({ ...item, id: generateRandomString()}))

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown button={
                <button className={styles.button}>
                    <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                        <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                        <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
                    </svg>
                </button>
            }>
                <ul className={styles.droplist}>
                    <GenericList list={LIST} />
                </ul>
            </Dropdown>
        </div>
    );
}
