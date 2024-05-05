import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to Budget Wizard!</h1>
      <p className="mt-4">
        We help you with your budget by integrating your bank account, credit card statements, and other financial data into one platform that lets you track your spending and save money each month.
      </p>
    </div>
  );
}
