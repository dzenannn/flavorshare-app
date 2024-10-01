import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Time to get started !
        <p>
          <a>
            <Link href={"/meals"}>Meals</Link>
          </a>
          <br />
          <a>
            <Link href={"/meals/share"}>Share Meal</Link>
          </a>
          <br />
          <a>
            <Link href={"/community"}>Community</Link>
          </a>
        </p>
      </h1>
    </main>
  );
}
