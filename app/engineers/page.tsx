import type { Metadata } from "next"
import { AudiencePage } from "@/components/audience-page"
import { audiences } from "@/lib/audiences"

export const metadata: Metadata = {
  title: "Engineers | Nikolay Valev",
  description: "Technical overview for peers before moving to detailed engineering writeups.",
}

export default function EngineersPage() {
  return <AudiencePage audience={audiences.engineers} />
}
