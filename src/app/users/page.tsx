/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "lastOrder",
    header: "Designation"
  },
  {
    accessorKey: "method",
    header: "Joining Date"
  }
];

const data: Payment[] = [
  {
    name: "Ankita Shohel",
    email: "ankita@yy.ventures",
    lastOrder: "Deputy Manager",
    method: "02-05-23"
  },
  {
    name: "Nishat Nujhat",
    email: "nishat@yy.ventures",
    lastOrder: "Marketing Specialist",
    method: "15-06-23"
  },
  {
    name: "Iloera Muktadir Era",
    email: "iloera@yy.ventures",
    lastOrder: "Web Developer",
    method: "20-07-23"
  },
  {
    name: "Mustain Chowdhury",
    email: "mustain@yy.ventures",
    lastOrder: "Software Engineer",
    method: "10-08-23"
  },
  {
    name: "Shanto Kumar Sorkar",
    email: "shanto@yy.ventures",
    lastOrder: "Project Manager",
    method: "05-09-23"
  },
  {
    name: "Shohel Rana",
    email: "shohel@yy.ventures",
    lastOrder: "UI/UX Designer",
    method: "18-10-23"
  },
  {
    name: "Diljanan Aktar",
    email: "diljanan@yy.ventures",
    lastOrder: "Business Analyst",
    method: "22-11-23"
  },
  {
    name: "Fariha Tabassum Haque",
    email: "fariha@yy.ventures",
    lastOrder: "HR Executive",
    method: "30-12-23"
  },
  {
    name: "Sangida Islam Dipti",
    email: "sangida@yy.ventures",
    lastOrder: "Content Writer",
    method: "12-01-24"
  },
  {
    name: "Osman Dhali",
    email: "osman@yy.ventures",
    lastOrder: "Sales Manager",
    method: "25-02-24"
  },
  {
    name: "Fairana Islam",
    email: "fairana@yy.ventures",
    lastOrder: "Finance Officer",
    method: "05-03-24"
  },
  {
    name: "Shafadul Haque",
    email: "shafadul@yy.ventures",
    lastOrder: "Product Manager",
    method: "08-04-24"
  },
  {
    name: "Layla Haque",
    email: "layla@yy.ventures",
    lastOrder: "Operations Head",
    method: "18-05-24"
  }
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
