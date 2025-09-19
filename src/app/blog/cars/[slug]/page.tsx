import Link from "next/link";
import { getCars } from "../utils";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { Divider } from "antd";

async function generateStaticParams() {
  return (await getCars()).map((item) => item.id);
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const car = (await getCars()).find((item) => item.id === slug);

  if (!car) return <h1>No car was found</h1>;

  return (
    <div>
      <Link href={"/blog/cars"}>Go back</Link>
      <Divider />
      <Title>
        {car.manufacturer} {car.model}
      </Title>
      <Text>{car.description}</Text>
    </div>
  );
}
