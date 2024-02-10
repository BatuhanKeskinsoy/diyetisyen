export default async function dataAuth() {
    return {
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      Title: `Panel | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
      Description: `Panel giriş işlemleri`,
      Robots: "noindex, nofollow",
    };
  }
  