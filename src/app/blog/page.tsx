import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href={`/blog/cars/`}>Cars</Link>
    </div>
  );
}
