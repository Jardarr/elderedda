export default function ToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button className="fixed bottom-3 right-5 border py-2 px-3 text-sm rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500 hover:border-teal-500 transition ease-in-out duration-300 bg-teal-950/80" onClick={scrollToTop}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h14"/><path d="m18 13-6-6-6 6"/><path d="M12 7v14"/></svg>
        </button>
    )
}