import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface AuthProtectProps {
  children: ReactNode;
  mode: "auth" | "guest";
}
const AuthProtect = ({ children, mode }: AuthProtectProps) => {
  const token = localStorage.getItem("token");
  const { i18n } = useTranslation();

  if (mode === "auth") {
    if (!token) {
      return <Navigate to={`/${i18n.language}/sign-in`} />;
    }
    return <>{children}</>;
  }

  if (mode === "guest") {
    if (token) {
      return <Navigate to={`/${i18n.language}/my-profile`} />;
    }
    return <>{children}</>;
  }

  return null;
};

export default AuthProtect;
