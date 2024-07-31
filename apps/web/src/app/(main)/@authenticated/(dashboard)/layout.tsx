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
    <div className="flex w-full flex-col gap-4 px-4 pb-4 pt-[100px]">
      <div className="w-full">{numbers}</div>
      <div className="flex w-full items-start justify-center gap-4">
        <div className="w-2/3">{stats}</div>
        <div className="w-1/3">{todo}</div>
      </div>
    </div>
  );
}
