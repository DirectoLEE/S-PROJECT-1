import Header from "@/app/layout/Header";
import Sidebar from "@/app/layout/Sidebar";
import Maincontent from "@/app/layout/Maincontent";
import Footer from "@/app/layout/Footer";

export default function Home() {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <div>
                    <Sidebar/>
                </div>
                <div>
                    <Maincontent/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}
