/** @format */

import { cn } from "@/components/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

export default function PageTitle({ title, className }: Props) {
  return <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>;
}
