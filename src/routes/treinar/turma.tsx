import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/treinar/turma")({
  component: () => <Outlet />,
});
