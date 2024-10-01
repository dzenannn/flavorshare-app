import Link from "next/link";

export default function PlaceholderPage({ params }) {
  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      Slug stranica
      <br />
      <br />
      {params.placeholder}
      <br />
      <br />
      <Link href={"/"}>Back to Homepage</Link>
    </div>
  );
}
