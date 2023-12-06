import { useTranslation } from "react-i18next";

const TranslateHook = () => {
  const { t } = useTranslation();
  return {
    t,
  };
};

export default TranslateHook;
