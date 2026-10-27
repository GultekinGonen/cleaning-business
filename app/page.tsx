import { redirect } from "next/navigation";

// Send visitors who open the root URL to the French homepage.
export default function Home() {
  redirect("/fr");
}