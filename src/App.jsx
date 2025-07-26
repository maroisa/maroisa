import { createSignal, onMount } from "solid-js";
import FrontPage from "./components/FrontPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    let mainContainer;
    let currentPage = 0;

    const [currentBg, setCurrentBg] = createSignal("bg-gray-700");

    const bgColors = [
        "bg-gray-700",
        "bg-gray-800",
        "bg-gray-900",
    ];

    function dynamicBg() {
        const newCurrentPage = Math.round(window.scrollY / window.innerHeight);
        if (currentPage == newCurrentPage) return;
        currentPage = newCurrentPage;
        setCurrentBg(bgColors[newCurrentPage]);
    }

    onMount(() => {
        dynamicBg();
        window.addEventListener("scroll", dynamicBg);
    });

    return (
        <main
            class={` text-sky-100 w-screen transition-colors duration-500 ${currentBg()}`}
            ref={mainContainer}
        >
            <FrontPage />
            <AboutPage />
            <ProjectPage />
            <Footer />
        </main>
    );
}
