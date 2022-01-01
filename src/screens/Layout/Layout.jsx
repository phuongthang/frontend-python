import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    /**
     * render template
     */
    return (
        <div id="app">
            <Sidebar />
            <div id="main">
                <Header />
                <Content />
                <Footer />
            </div>
        </div>
    )
}