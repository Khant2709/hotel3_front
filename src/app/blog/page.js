import React from 'react';

import HeaderLineBackground from "../../../components/headerLineBackgrund/headerLineBackground";
import {numberCurrentHotel} from "../../../informationData/contacts";

import styles from '../../styles/blog.module.css';
import stylesFont from '../../styles/fonts/timesNewRoman.module.css';


const BlogPage = () => {
    return (

        <>
            <HeaderLineBackground hotelNumber={numberCurrentHotel} display={true}/>
            <div className={styles.main}>
                <p className={stylesFont.newRoman700}>На данный момент страница находиться в разработке</p>
            </div>
        </>
    );
};

export default BlogPage;