import type { Metadata } from "next"
import { AudiencePage } from "@/components/audience-page"
import { audiences } from "@/lib/audiences"

export const metadata: Metadata = {
  title: "Clients | Nikolay Valev",
  description: "Consulting-fit overview before moving to full client services details.",
}

export default function ClientsPage() {
  return <AudiencePage audience={audiences.clients} />
}
