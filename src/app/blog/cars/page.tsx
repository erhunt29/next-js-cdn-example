import Link from "next/link";
import { Divider } from "antd";
import { getCars } from "./utils";

export default async function Page() {
  const cars = await getCars();

  if (!cars.length) return <h1>No cars was found</h1>;

  return (
    <div>
      <h1>All cars are here</h1>
      <Divider />
      <ul>
        {cars.map((item) => (
          <li key={item.id}>
            <Link href={`/blog/cars/${item.id}`}>
              {item.manufacturer} {item.model}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
