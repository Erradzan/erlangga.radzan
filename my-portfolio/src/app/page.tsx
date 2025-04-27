// app/page.tsx
import { redirect } from "next/navigation";

export default function Page() {
  // Redirects immediately when the root page is accessed
  redirect("/home"); // This makes it automatically redirect to /home
  return null; // You can return null here because the redirect happens before the page is rendered
}
