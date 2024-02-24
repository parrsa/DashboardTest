import Login from "../Pages/LoginPage"
import MainPages from "../Pages/MainPages"
import Aboute from "../Pages/MainPages/component/Report"

export interface AllRoutes {
    type: string,
    name: string,
    key: string,
    route: string,
    component: React.ReactNode
}

const routes: AllRoutes[] = [
    {
        type: "link",
        name: "login",
        key: "login",
        route: "/",
        component: <Login />
    },
    {
        type: "link",
        name: "Home",
        key: "home",
        route: "/mainpage",
        component: <MainPages />
    },
    {
        type: "link",
        name: "Home",
        key: "home",
        route: "/aboute",
        component: <Aboute />
    },
]

export default routes