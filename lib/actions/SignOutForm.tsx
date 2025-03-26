"use server";
import React from "react";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export const SignOutHandle = async () => {
  await signOut();
};
