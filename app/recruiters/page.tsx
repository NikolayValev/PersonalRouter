import type { Metadata } from "next"
import { AudiencePage } from "@/components/audience-page"
import { audiences } from "@/lib/audiences"

export const metadata: Metadata = {
  title: "Recruiters | Nikolay Valev",
  description: "Role-fit overview and hiring signal before moving to the full recruiter profile.",
}

export default function RecruitersPage() {
  return <AudiencePage audience={audiences.recruiters} />
}
