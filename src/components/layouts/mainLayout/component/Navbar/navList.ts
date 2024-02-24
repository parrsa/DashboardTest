import { List } from "../../../../../Types/index";
const navList: List[] = [
    {
        title: "صفحه اصلی",
        path: '/mainpage',
        id: 0,
    },

    {
        title: "گزارشات",
        path: '/aboute',
        id: 1
    },
    {
        title: "خروج",
        path: '/',
        id: 2
    }

]
const ProfileList: List[] = [
    {
        title: "رزرو های شما",
        path: '/',
        id: 1
    },
    {
        title: "کیف پول",
        path: '/',
        id: 2
    },
    {
        title: "خروج از حساب",
        path: '/',
        id: 3
    }
];
export { navList, ProfileList }