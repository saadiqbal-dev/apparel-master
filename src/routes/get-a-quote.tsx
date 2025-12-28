import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/get-a-quote")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Get a Quote</div>;
}
