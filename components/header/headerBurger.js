'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {WrapperMail, WrapperPhone} from "../wrapperPhone/wrapperLink";
import {contacts, numberCurrentHotel} from "../../informationData/contacts";
import {getAllData} from "../../utils/axios";

import burger from "../../public/burger.png";
import call from "../../public/callMobile.svg";
import close from "../../public/close.png";

import styles from "./headerBurger.module.css";
import stylesFontsI from "../../src/styles/fonts/inter.module.css";
import stylesFontsT from "../../src/styles/fonts/timesNewRoman.module.css";


const HeaderBurger = ({navbar}) => {
    const pathname = usePathname();
    const currentPath = pathname.split('/').length > 2 ? `/${pathname.split('/')[1]}` : pathname;
    const phone = contacts[0];
    const email = contacts[1];

    const [changeBlock, setChangeBlock] = useState(true);
    const [changeStyle, setChangeStyle] = useState(true);
    const [allHotels, setAllHotels] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const resHotels = await getAllData.allHotels()
            setAllHotels(resHotels.data.data)
        }
        getData();
    }, [])

    const validAllHotels = allHotels && allHotels.length !== 0;
    const currentHotel = validAllHotels && allHotels.find(hotel => hotel.numberHotel === numberCurrentHotel);

    const toggle = () => {
        setChangeStyle(!changeStyle);
        setTimeout(() => {
            setChangeBlock(!changeBlock);
        }, 500)
    }

    return (
        <>
            {
                changeBlock
                    ? <div className={styles.wrapperHeaderMobile}>
                        <div className={styles.containerHeaderMobile}>
                            <div className={styles.wrapperBurger}>
                                <Image alt={'burger'} src={burger} className={styles.iconBurger} onClick={toggle}/>
                            </div>
                            <p className={styles.title}>Вижу море</p>
                            <a href={`tel:${phone.wt}`}>
                                <Image alt={'call'} src={call} className={styles.iconCall}/>
                            </a>
                        </div>
                    </div>
                    : <div className={`${styles.navbar} ${changeStyle ? '' : styles.showNavbar}`}>
                        <Image alt={'close'} src={close} onClick={toggle}
                               className={styles.iconClose}/>
                        <div className={styles.containerNavbar}>
                            {navbar.map(el => {
                                return <Link key={el.id}
                                             href={el.link}
                                             onClick={toggle}
                                             className={`${el.link === currentPath && stylesFontsI.Inter700}
                                                 ${el.link === currentPath && styles.activeLink} 
                                                 ${styles.link}`}>
                                    {el.textRu}
                                </Link>
                            })}
                        </div>

                        <div className={styles.containerContacts}>
                            <div className={`${stylesFontsT.newRoman400} ${styles.rowContainerContacts}`}>
                                <p className={styles.subTitle}>Единый номер:</p>
                                <WrapperPhone phoneNumber={phone.phone} telegramNumber={phone.tg}
                                              whatsAppNumber={phone.wt}/>
                            </div>
                            <div className={`${stylesFontsT.newRoman400} ${styles.rowContainerContacts}`}>
                                <p className={styles.subTitle}>Наша почта:</p>
                                <WrapperMail email={email.mail}/>
                            </div>
                            <div className={`${stylesFontsT.newRoman400} ${styles.rowContainerContacts}`}>
                                <p className={styles.subTitle}>Наш адресс:</p>
                                <p>{currentHotel?.address || 'Ошибка загрузки данных'}</p>
                            </div>
                        </div>

                        <div className={`${stylesFontsT.newRoman400} ${styles.containerOtherHotels}`}>
                            <p className={styles.titleOtherHotels}>Другие наши отели:</p>
                            {validAllHotels && allHotels.map(hotel => {
                                if (hotel.id !== currentHotel.id) {
                                    return <Link className={`${stylesFontsT.newRoman400} ${styles.hotelName}`}
                                                 href={hotel.website}
                                                 key={hotel.id}>
                                        {hotel.nameHotel}
                                    </Link>
                                }
                            })}
                        </div>
                    </div>
            }
        </>
    );
};

export default HeaderBurger;


// RESPONSE getAllData.allHotels().data.data

// status === 200 => [{..},{..},...], status !== 200 => []
// every element has:
// {
// id: number,
// nameHotel: string,
// numberHotel: string,
// descriptionHotel: string,
// beachInformation: string,
// address: string,
// territory: string,
// website: string,
// }
