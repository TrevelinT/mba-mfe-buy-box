import { createRoot } from "react-dom/client";
import BuyBoxContainer from "./components/buy-box-container";
import "./styles.css";

const rootElement = document.getElementById("app");
if (!rootElement) {
	throw new Error('Root element "#app" not found');
}

createRoot(rootElement).render(<BuyBoxContainer />);
