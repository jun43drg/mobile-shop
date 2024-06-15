"use client";

import { logoutAction } from "@/app/(mainlayout)/logout/actions";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    logoutAction();
  }, []);
  return <></>;
}
