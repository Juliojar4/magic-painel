import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/home'
import AllCards from '../pages/allCards/allCards'
import MyCards from '../pages/MyCards';

const Router = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/allCards" element={<AllCards />}></Route>
            <Route path="/myCards" element={<MyCards />}></Route>
        </Routes>
    )
}

export default Router