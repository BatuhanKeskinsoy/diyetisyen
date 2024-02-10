import LoginForm from "@/components/(auth)/LoginForm";
import React from "react";
import { metaAuth } from "@/meta";
import Image from "next/image";

export const metadata = metaAuth();

function page() {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <Image
        src={"/theme/online-diyet-nedir.jpg"}
        alt="auth arkaplan"
        fill
        className="object-cover object-bottom"
      />
      <div className="flex items-center justify-center min-h-screen bg-site/20 p-4 backdrop-blur">
        <div className="flex flex-col w-full max-w-xl shadow-lg rounded-xl bg-white/70 shadow-black/20 lg:p-12 md:p-8 p-4 overflow-hidden">
          <h1 className="text-4xl font-semibold font-gemunu text-site">
            Giriş Yap
          </h1>
          <hr className="my-6 opacity-20" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default page;
