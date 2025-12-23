import { Header } from "../header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
}
