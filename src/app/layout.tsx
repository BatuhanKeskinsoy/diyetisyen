import "@/styles/globals.css";
import { GlobalContextProvider } from "@/app/Context/store";
import FixedScrollTop from "@/components/Global/FixedScrollTop";
import MetaFavicon from "@/meta/Favicon";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <MetaFavicon />
      <body>
        <GlobalContextProvider>
          {children}
          <FixedScrollTop />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
