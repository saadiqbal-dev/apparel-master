import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/client-tools')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Client Tools</div>
}
