export const jsonLDMainPage = {
    "url": "https://vizhumore.ru",
    "description": "Отель Вижу море в хуторе Бетта, предназначен для шикарного отдыха и приятных воспоминаний. Краснодарский край, хутор Бетта,  +7-989-2430-60-80 для бронирования и обслуживания гостей.",
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://vizhumore.ru"
            }
        ]
    }
};

export const jsonLDHotelsPage = {
    "url": "https://vizhumore.ru/hotels",
    "description": "Выбирайте любой наш отель на Черном море в хуторе Бетта, Геленджике, Сочи. Забронируйте прямо сейчас! Телефон: +7-989-2430-60-80.",
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://vizhumore.ru"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Отели",
                "item": "https://vizhumore.ru/hotels"
            }
        ]
    }
};

export const jsonLDContactsPage = {
    "url": "https://vizhumore.ru/contacts",
    "description": "Контакты отеля Вижу море в хуторе Бетта. Краснодарский край, хутор Бетта,  +7-989-2430-60-80 для бронирования и обслуживания гостей.",
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://vizhumore.ru"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Контакты",
                "item": "https://vizhumore.ru/contacts"
            }
        ]
    }
};

export const jsonLDQuestionPage = {
    "url": "https://vizhumore.ru/questionlist",
    "description": "Вопросы - ответы отеля Вижу море в хуторе Бетта. Тут вы узнаете ответы на все часто заадаваемые вопросы.",
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://vizhumore.ru"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Контакты",
                "item": "https://vizhumore.ru/questionlist"
            }
        ]
    }
}

export const jsonLDReservationAllPage = {
    "url": "https://vizhumore.ru/reservationall",
    "description": "Выбирайте и бронируйте номера на Черном море в наших отелях в хуторе Бетта, Сочи, Геленджике. Сравните цены, количество комнат и вместимость для идеального отдыха у моря.",
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://vizhumore.ru"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Бронирование",
                "item": "https://vizhumore.ru/reservationall"
            }
        ]
    }
};

export const jsonLDReservationPage = {
    "url": "https://vizhumore.ru/reservation",
    "description": "Выбирайте и бронируйте номера на Черном море в хуторе Бетта в нашем отеле. Сравните цены, количество комнат и вместимость для идеального отдыха у моря и в лесу.",
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://vizhumore.ru"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Бронирование",
                "item": "https://vizhumore.ru/reservation"
            }
        ]
    }
};

export const jsonLDCurrentRoom = ({id, roomsDescription, nameApartment}) => {
    return {
        "url": `https://vizhumore.ru/reservation/${id}`,
        "description": `${roomsDescription}`,
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Главная",
                    "item": "https://vizhumore.ru"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Бронирование",
                    "item": "https://vizhumore.ru/reservation"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": `${nameApartment}`,
                    "item": `https://vizhumore.ru/reservation/${id}`
                },
            ]
        }
    }
}