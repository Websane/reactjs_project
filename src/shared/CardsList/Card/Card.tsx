import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Picture} from "./Picture";
import {Menu} from "./Menu";
import {Karma} from "./Karma";
import {Comments} from "./Comments";
import {Actions} from "./Actions";

export function Card() {
    return (
        <li className={styles.card}>
            <TextContent />
            <Picture />
            <Menu />
            <div className={styles.controls}>
                <Karma />
                <Comments />
                <Actions />
            </div>
        </li>
    );
}