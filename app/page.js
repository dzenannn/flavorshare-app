import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Time to get started !
        <p>
          <Link href={"/meals"}>Meals</Link>
          <br />
          <Link href={"/meals/share"}>Share Meal</Link>
          <br />
          <Link href={"/community"}>Community</Link>
        </p>
      </h1>
    </main>
  );
}
