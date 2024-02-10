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
      <div className="flex items-center justify-center h-[100dvh] max-h-[100dvh] bg-black-900/20 p-4 backdrop-blur-md">
        <div className="flex flex-col w-full max-w-xl shadow-lg rounded-xl bg-white/70 shadow-black/20 lg:p-12 p-8 overflow-hidden">
          <h1 className="text-4xl font-semibold font-gemunu text-[#002a4f]">
            Giriş Yap
          </h1>
          <hr className="my-6 border-gray-600 opacity-15" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default page;
