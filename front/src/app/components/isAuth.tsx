"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useUserContext } from "@/contexts/UserContext";

export function isFoster(Component: any) {
  return function IsFoster(props: any) {
    const auth = useUserContext();
    useEffect(() => {
      if (!auth.user?.accueillant) {
        return redirect("/");
      }
    }, []);
    if (!auth) {
      return null;
    }
    return <Component {...props} />;
  };
}

export function isShelter(Component: any) {
  return function IsShelter(props: any) {
    const auth = useUserContext();
    useEffect(() => {
      if (!auth.user?.refuge) {
        return redirect("/");
      }
    }, []);
    if (!auth) {
      return null;
    }
    return <Component {...props} />;
  };
}