export const metadata = { title: "CBM Radio Admin" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          margin: 0,
          padding: 0,
          background: "#f9f9f9",
        }}
      >
        {children}
      </body>
    </html>
  );
}
