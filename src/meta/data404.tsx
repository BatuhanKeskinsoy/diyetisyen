export default async function data404() {
  return {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    Title: `Sayfa Bulunamadı | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    Description: `Üzgünüz, aradığınızı bulamadık. Bu sayfa, silinmiş veya değiştirilmiş olabilir.`,
    Robots: "noindex, nofollow",
  };
}
