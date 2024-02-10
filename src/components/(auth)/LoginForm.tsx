"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { IoCheckmark, IoEye, IoEyeOffOutline, IoLockOpenOutline, IoMailOutline } from 'react-icons/io5';
import { CustomButton } from '@/components/Global/Customs';

function LoginForm() {
    
  const [email, setEmail] = useState("batuhankeskinsoy55@gmail.com");
  const [password, setPassword] = useState("Bk123456");
  const [showPassword, setShowPassword] = useState(false);
  const iconStyle = { color: "#002a4f", size: 26 };
  const [Icon, setIcon] = useState<React.ReactNode>(
    <IoEyeOffOutline {...iconStyle} />
  );

  const [rememberMe, setRememberMe] = useState(false);

  
  const handleLogin = async (e: any) => {
    e.preventDefault();
    /* try {
      await login({
        email,
        password,
        rememberMe,
        setIsLogin,
        setUser,
        setIsAuthActive,
      });
    } catch (error) {
      console.error("Login failed", error);
    } */
  };

  const handleResetPassword = (e: any) => {
    e.preventDefault();
    /* resetPassword(email); */
  };

  const formControl = email !== "" && password !== "";
  return (
    <div className="flex flex-col gap-5 w-full overflow-y-auto">
        <form
          onSubmit={formControl ? handleLogin : undefined}
          className="lg:space-y-8 space-y-6 flex flex-col w-full justify-center lg:h-full h-fit"
        >
          <div className="flex gap-2 rounded-[12px] py-2 px-[14px] items-center border border-[#002a4f]/30">
            <IoMailOutline {...iconStyle} />
            <label className="relative w-full flex rounded-sm">
              <input
                required={true}
                type="email"
                className="px-2 w-full outline-none is-dirty pt-[10px] peer bg-transparent"
                value={email}
                autoComplete="true"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <span className="absolute top-1/2 left-[10px] font-[400] -translate-y-1/2 pointer-events-none cursor-text text-[#9da4ae] transition-all peer-focus:text-[10px] peer-focus:text-[#4d5761] peer-focus:top-0.5 peer-valid:text-[10px] peer-valid:text-[#4d5761] peer-valid:top-0.5">
                E-Posta
              </span>
            </label>
          </div>
          <div className="flex gap-2 rounded-[12px] py-2 px-[14px] items-center border border-[#002a4f]/30">
            <IoLockOpenOutline {...iconStyle} />
            <label className="relative w-full flex rounded-sm">
              <input
                required={true}
                type={`${showPassword ? "text" : "password"}`}
                className="px-2 w-full outline-none is-dirty pt-[10px] peer bg-transparent"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span className="absolute top-1/2 left-[10px] font-[400] -translate-y-1/2 pointer-events-none cursor-text text-[#9da4ae] transition-all peer-focus:text-[10px] peer-focus:text-[#4d5761] peer-focus:top-0.5 peer-valid:text-[10px] peer-valid:text-[#4d5761] peer-valid:top-0.5">
                Şifre
              </span>
            </label>
            <div
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prevShowPassword) => !prevShowPassword);
                setIcon(
                  showPassword ? (
                    <IoEyeOffOutline {...iconStyle} />
                  ) : (
                    <IoEye
                      {...iconStyle}
                      className="fill-site transition-all"
                    />
                  )
                );
              }}
              className="cursor-pointer"
            >
              {Icon}
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-start justify-between gap-4">
            <div
              onClick={() => setRememberMe(!rememberMe)}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-md transition-all ${
                  rememberMe
                    ? "bg-site border border-site"
                    : "bg-transparent border border-[#002a4f]/30"
                }`}
              >
                {rememberMe && ( <IoCheckmark color="#fff" />
                )}
              </div>
              <p
                className={`text-sm font-semibold select-none group-hover:text-site transition-all tracking-wide ${
                  rememberMe ? "text-site" : "text-[#002a4f]"
                } `}
              >
                Beni Hatırla
              </p>
            </div>
            <CustomButton
              title="Giriş Yap"
              btnType="submit"
              containerStyles={`min-w-fit ml-auto lg:w-fit w-full text-center justify-center text-white transition-all rounded-md py-3 px-8 flex items-center gap-x-2 tracking-wider lg:my-0 my-4 bg-site/70 text-sm ${
                formControl ? "opacity-100 hover:bg-site hover:text-white hover:shadow-lg hover:shadow-site/30" : "opacity-50 cursor-not-allowed"
              }`}
              handleClick={formControl ? handleLogin : undefined}
              isDisabled={!formControl}
            />
          </div>
        </form>
        <div className="flex justify-end items-center">
          <CustomButton
            title="Şifremi Unuttum"
            btnType="submit"
            handleClick={handleResetPassword}
            containerStyles="text-sm text-gray-500 hover:text-site transition-all"
          />
        </div>
      </div>
  )
}

export default LoginForm