import imgTestHotel from '../public/testHotel2.jpg';
import img1 from '../public/hotel3BigImg1.png';
import img2 from '../public/testroom.webp';
import img3 from '../public/hotel2SmallImg3.png';


// type of housing
// cottage - коттедж
// rooms - комнаты
// apartment - квартиры

export const hotelList = [
    {
        id: 1,
        numberHotel: 'hotel1',
        nameHotel: 'Шикарный вид',
        imageHotelMain: imgTestHotel,
        website: 'https://shikarnyivid.ru',
        address: 'Краснодарский край, п.Кабардинка, ул. Сухумское Шоссе 1а'
    },
    {
        id: 2,
        numberHotel: 'hotel2',
        nameHotel: `Бор'О'Дача`,
        imageHotelMain: imgTestHotel,
        website: 'https://borodacha.ru',
        address: 'Краснодарский край, Бетта'
    },
    {
        id: 3,
        numberHotel: 'hotel3',
        nameHotel: 'Вижу море',
        imageHotelMain: imgTestHotel,
        website: 'https://vizhumore.ru',
        address: 'Краснодарский край, Бетта'
    },
    {
        id: 4,
        numberHotel: 'hotel4',
        nameHotel: 'Сан Марино',
        imageHotelMain: imgTestHotel,
        website: 'https://sanmarinosochi.ru',
        address: 'Краснодарский край, Сочи, Лазаревское, ул. Одоевского 87 '
    },
];

export const testRoomsPhotos = [img1, img2, img3, img1, img2, img3];