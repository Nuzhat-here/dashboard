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
import { cn } from "@/lib/utils";

type Props = {};
type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Task Title"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
  },
  {
    accessorKey: "lastOrder",
    header: "Last Update"
  },
  {
    accessorKey: "method",
    header: "Delivery Method"
  }
];

const data: Payment[] = [
  {
    order: "TASK001 - Awaiting Online Report Submission",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Online Report"
  },
  {
    order: "TASK002 - Preparing Zoom Meeting for Client Presentation",
    status: "Processing",
    lastOrder: "2023-02-20",
    method: "Zoom Meeting"
  },
  {
    order: "TASK003 - MOU Signed with Intercontinental Dhaka",
    status: "Completed",
    lastOrder: "2023-03-10",
    method: "MOU Signing Ceremony"
  },
  {
    order: "TASK004 - Awaiting Finance Report of Impact Hub Dhaka",
    status: "Pending",
    lastOrder: "2023-04-05",
    method: "PDF report"
  },
  {
    order: "TASK005 - Bank Transfer Processed for Payment",
    status: "Completed",
    lastOrder: "2023-05-12",
    method: "Bank Transfer"
  },
  {
    order: "TASK006 - Designing Banner for Upcoming Event",
    status: "Processing",
    lastOrder: "2023-06-18",
    method: "Banner Design"
  },
  {
    order: "TASK007 - API Key Distributed to Dev Team",
    status: "Completed",
    lastOrder: "2023-07-22",
    method: "API key distribution"
  },
  {
    order: "TASK008 - Awaiting Bank Transfer Confirmation",
    status: "Pending",
    lastOrder: "2023-08-30",
    method: "Bank Transfer"
  },
  {
    order: "TASK009 - Generating Online Report for Review",
    status: "Processing",
    lastOrder: "2023-09-05",
    method: "Online Report"
  },
  {
    order: "TASK010 - Successful Zoom Meeting for Client Briefing",
    status: "Completed",
    lastOrder: "2023-10-18",
    method: "Zoom Meeting"
  },
  {
    order: "TASK011 - Petty Cash for Minor Expenses",
    status: "Pending",
    lastOrder: "2023-11-25",
    method: "Petty Cash"
  },
  {
    order: "TASK012 - Venue Visit Done for New Project",
    status: "Completed",
    lastOrder: "2024-12-25",
    method: "Visit to the venue"
  },
  {
    order: "TASK013 - Payment Under Review via Bkash",
    status: "Processing",
    lastOrder: "2024-01-15",
    method: "Bkash Payment"
  },
  {
    order: "TASK014 - Report Document Submitted for Final Approval",
    status: "Completed",
    lastOrder: "2024-02-20",
    method: "Report Doc"
  },
  {
    order: "TASK015 - Awaiting Credit Card Payment Confirmation",
    status: "Pending",
    lastOrder: "2024-03-30",
    method: "Credit Card"
  }
];

export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Task Management" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
  