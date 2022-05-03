import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/home'
import AllCards from '../pages/allCards/allCards'

const Router = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/allCards" element={<AllCards />}></Route>
        </Routes>
    )
}

export default Router