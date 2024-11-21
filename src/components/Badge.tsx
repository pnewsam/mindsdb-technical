export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-blue-400/25 px-[8px] py-[4px] text-xs font-medium text-blue-600">
      {children}
    </span>
  );
}
