import "@/styles/globals.css";
import { GlobalContextProvider } from "@/app/Context/store";
import AutoScrollTop from "@/components/Global/AutoScrollTop";
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
          <AutoScrollTop />
          {children}
          <FixedScrollTop />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
