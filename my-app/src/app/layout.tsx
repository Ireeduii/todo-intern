import "./globals.css";

export const metadata = {
  title: "To Do",
  description: "Microsoft To Do style app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">{children}</body>
    </html>
  );
}
