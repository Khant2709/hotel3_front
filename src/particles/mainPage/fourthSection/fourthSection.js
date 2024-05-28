import React from 'react';

import Title from "../../../../components/title/title";
import Button from "../../../../components/button/button";

import styles from '../../../styles/fourthSection.module.css';
import stylesFontsT from '../../../styles/fonts/timesNewRoman.module.css';

const FourthSection = ({descriptionHotel, numberHotel}) => {
    return (
        <section className={styles.main}>
            <Title Tag={'h2'} text={'О нас'}/>

            <div className={styles.wrapperMain}>
                <div className={styles.wrapperBlack}>
                    <div className={styles.containerDescription}>
                        <p className={stylesFontsT.newRoman400}>{descriptionHotel}</p>
                        <Button text={'Связаться с нами'} hotel={numberHotel}/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FourthSection;