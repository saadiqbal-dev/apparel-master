import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="font-inter min-h-screen w-full antialiased">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
