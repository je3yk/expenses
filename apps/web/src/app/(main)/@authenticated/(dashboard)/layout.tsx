export default function DashboardLayout({
  children,
  numbers,
}: {
  children: React.ReactNode;
  numbers: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-2/3 flex-col items-center justify-center">
        {children}
      </div>
      <div className="flex h-full w-1/3 flex-col items-center justify-center">
        {numbers}
      </div>
    </div>
  );
}
