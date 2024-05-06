import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Midas" },
    { name: "Midas - A budgeting app", content: "Midas" },
  ];
};

export default function Index() {
  return (

    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold">Welcome to Midas!</h1>
      <p className="mt-4">
         budget by integrating your bank account, credit card statements, and other financial data into one platform that lets you track your spending and save money each month.
      </p>
    </div>
  );
}
