import { headers } from "next/headers";

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
      <h1>User Static</h1>
      <h2>Headers:</h2>
      <br />
      <p style={{ whiteSpace: "pre-line" }}>{headersText}</p>
    </div>
  );
}
