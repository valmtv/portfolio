import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with Valerii (AI) | Digital Twin",
  description:
    "Interactive AI clone of Valerii Matviiv. Ask questions about software engineering experience at ABB, projects, stack, studies at AGH/NOVA Lisbon, or off-screen hobbies.",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
