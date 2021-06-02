import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * @desc every time the page has been routed to a new page,
 *  the position of the scroll will be at the top of the window
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}