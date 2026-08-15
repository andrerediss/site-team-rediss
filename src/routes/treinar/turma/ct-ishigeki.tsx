import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/treinar/turma/ct-ishigeki")({
  component: () => <Outlet />,
});
