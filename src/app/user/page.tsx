import Link from "next/link";
import { headers } from "next/headers";
import { useMemo } from "react";

export default async function Page() {
  const headersList = await headers();

  const headersMap = headersList.entries().reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>
  );

  const headersText = JSON.stringify(headersMap, null, 2);

  return (
    <div>
      <h1>User</h1>
      <h2>Headers:</h2>
      <br />
      <p style={{ whiteSpace: "pre-line" }}>{headersText}</p>
    </div>
  );
}
