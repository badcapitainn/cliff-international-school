import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Celebrate Cliffs International College's academic results, Digital Minds quiz victories, and student achievements in Zimbabwe.",
  alternates: { canonical: "/achievements" },
  openGraph: {
    title: "Achievements | Cliffs International College",
    description:
      "Academic excellence, Digital Minds quiz victories, and student achievements at Cliffs International College.",
    url: "/achievements",
    images: [
      {
        url: "/school_pictures/students_at debate.jpg",
        width: 1200,
        height: 630,
        alt: "Cliffs International College students competing in debate",
      },
    ],
  },
  twitter: { title: "Achievements | Cliffs International College" },
};

export default function AchievementsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
