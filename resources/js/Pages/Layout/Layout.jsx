import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Preheader from "./Preheader";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children})
{
    return(<div>
            <Preheader></Preheader>
            <Header></Header>
            {children}
            <Footer></Footer>
    </div>);
}