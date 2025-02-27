import { Header, Spinner } from "../components/custom";

export default function LoadingPage() {
  return (
    <div className="flex h-lvh w-full items-center justify-center gap-6">
      <Spinner size={"large"} />
      <Header vtag="h3">loading</Header>
    </div>
  );
}
