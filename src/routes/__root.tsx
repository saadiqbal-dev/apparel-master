import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="font-inter min-h-screen w-full antialiased flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
