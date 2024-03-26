export default function DashboardLayout({
  numbers,
  todo,
  stats,
}: {
  numbers: React.ReactNode;
  todo: React.ReactNode;
  stats: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col gap-5 px-10 pb-10 pt-[100px]">
      <div className="flex h-1/4 w-full">{numbers}</div>
      <div className="flex h-3/4 w-full items-center justify-center gap-5">
        <div className="h-full w-2/3">{stats}</div>
        <div className="h-full w-1/3">{todo}</div>
      </div>
    </div>
  );
}
