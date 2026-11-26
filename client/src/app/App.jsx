import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ScrollToTop } from "../utils/scrollToTop";
import "../i18n";
import { EmailSignupModal } from "../components/emailSignupModal/EmailSignupModal";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <EmailSignupModal />
      <AppRoutes />
    </BrowserRouter>
  );
};
