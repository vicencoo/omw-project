import { Link } from "react-router-dom";
import { OmwLogo } from "./OmwLogo";
import { Text } from "./Text";
import { FooterItems } from "../constants/footer";
import { Contact_Info } from "../data/contact/contactInfo";
import { Icon } from "../components/Icon";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="w-full border-t border-green-200 bg-white">
      <div className="container pt-12 md:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="mx-auto flex max-w-sm flex-col items-center gap-5 text-center md:mx-0 md:items-start md:text-left">
            <div className="flex">
              <OmwLogo />
            </div>

            <Text
              text={t("footer.description")}
              className="leading-6 text-gray-600 tracking-wide"
              size="text-sm"
              font="font-medium"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <Text
              text={t("footer.label1")}
              size="text-xl"
              font="font-semibold font-serif"
              className="text-gray-900"
            />

            <ul className="flex flex-col items-center gap-3 md:items-start">
              {FooterItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path || "#"}
                    className="w-fit text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-green-600  rounded-md tracking-wider"
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <Text
              text={t("footer.label2")}
              size="text-xl"
              font="font-semibold font-serif"
              className="text-gray-900"
            />

            <ul className="flex flex-col items-center gap-4 md:items-start">
              {Contact_Info.map((info) => (
                <li key={info.id} className="flex items-center gap-2">
                  <Icon
                    icon={info.icon}
                    size="xs"
                    className={"text-green-600"}
                  />
                  <Text
                    text={t(info.text)}
                    className="leading-6 text-gray-600"
                    font="font-medium"
                    size="text-sm"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center md:text-left border-t border-green-200 py-8 md:flex-row md:items-center md:justify-between">
          <Text
            size="text-sm"
            font="font-medium"
            className="tracking-wide text-gray-500"
            text={t("footer.footerRights")}
          />

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link
              to="/privacy-policy"
              className="hover:text-green-600 transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <span className="h-4 w-px bg-gray-300" />
            <Link
              to="/terms-of-service"
              className="hover:text-green-600 transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
