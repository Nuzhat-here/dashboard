/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "yyv_logo.jpeg";
import {  Users, CreditCard, Activity, TentTree, Star   } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Employees",
    amount: "43",
    discription: "+10.3% from last week",
    icon: Users
  },
  {
    label: "Employees On Leaves",
    amount: "6",
    discription: "approximately 3 employee on leave per month",
    icon: TentTree  
  },
  {
    label: "Pending Tasks",
    amount: "7",
    discription: "+2 since last month",
    icon: Activity
  },
  {
    label: "Performance Score This Week",
    amount: "92/100",
    discription: "+5 points since last review",
    icon: Star 
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Ankita Shohel",
    email: "ankita@yy.ventures",
    saleAmount: "Submitted the last Impact Hub's project Report"
  },
  {
    name: "Faiyaz Islam",
    email: "faiyaz@yy.ventures",
    saleAmount: "Attended the global meeting for McKingsy's annual audit"
  },

  {
    name: "Iloera Muktadir Era",
    email: "iloera@yy.ventures",
    saleAmount: "Resolved 15 support tickets"
  },
  
  {
    name: "Osman Dhali",
    email: "osman@yy.ventures",
    saleAmount: "Completed the front-end design of the SBYS23 website"
  },
  {
    name: "Nishat Nujhat",
    email: "nishat@yy.ventures",
    saleAmount: "completed her internship tenture yesterday"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Activities</p>
            <p className="text-sm text-gray-400">
              Highlight of this week: SBYS2023 vendor list is confirmed
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
