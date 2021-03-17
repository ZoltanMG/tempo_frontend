import React from 'react'
import useFetch from "../Hooks/Hooks"
import Loading from "../Helpers/Loading"
import Error from "../Helpers/Error"
import Header from '../Header';
import Footer from '../Footer/index';

import { ShowsRender } from "./showcards"

const API = process.env.REACT_APP_API;

export const Shows = () => {
    const { data, loading, error } = useFetch(`${API}/shows`)
    if (loading) {
        return <Loading />
    }
    if (error)
        return <Error />
    if (data) {
        return (
            <>
            <Header></Header>
            <div className="wraper">
                <ShowsRender data={data} ></ShowsRender>
            </div>
            <Footer></Footer>
            </>
        )
    }
}
