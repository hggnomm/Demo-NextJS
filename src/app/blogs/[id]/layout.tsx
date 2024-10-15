import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'View detail',
    description: 'Đẹp trai không muốn nói gì nữa',
  }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
