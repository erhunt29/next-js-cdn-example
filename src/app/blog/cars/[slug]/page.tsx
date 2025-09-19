import Link from "next/link";
import { getCars } from "../utils";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Image from "next/image";
import { Divider } from "antd";

export async function generateStaticParams() {
  return (await getCars()).map((item) => ({
    slug: item.id,
  }));
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
      <Image
        width={400}
        height={300}
        src={`/images/cars/${car.id}.jpg`}
        alt="car image"
      />
      <br />
      <br />
      <Text>{car.description}</Text>
    </div>
  );
}
