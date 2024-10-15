import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blogs List',
    description: 'Trời ơi tại sao tôi lại đẹp trai',
  }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
