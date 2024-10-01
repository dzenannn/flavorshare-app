import Link from "next/link";

export default function ShareMealPage() {
  return (
    <>
      <div>Share Meal Page</div>
      <Link href={"/meals/nesto-nepovezano"}>Nesto nepovezano</Link>
    </>
  );
}
