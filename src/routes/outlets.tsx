import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/outlets")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Find an Outlet</div>;
}
