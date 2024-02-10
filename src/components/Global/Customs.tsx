import { CustomButtonProps } from "@/Types/buttonTypes";
import Image from "next/image";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  leftIcon,
  iconStyles,
  iconAlt,
  isDisabled,
  onMouseEnter,
  onMouseLeave,
  iconWidth,
  iconHeight,
}: CustomButtonProps) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type={btnType}
      disabled={isDisabled}
      onClick={handleClick}
      className={`${containerStyles}`}
      title={title}
    >
      {leftIcon &&
        (typeof leftIcon === "string" ? (
          <Image
            width={iconWidth ? iconWidth : "24"}
            height={iconHeight ? iconHeight : "24"}
            className={`${
              iconWidth
                ? `!min-w-[${iconWidth}] w-[${iconWidth}]`
                : "!min-w-[24px] w-[24px]"
            } ${iconStyles}`}
            src={`${leftIcon}`}
            alt={`${iconAlt}`}
          />
        ) : (
          leftIcon
        ))}
      <span className={textStyles ? textStyles : ""}>{title}</span>
      {rightIcon &&
        (typeof rightIcon === "string" ? (
          <Image
            width={iconWidth ? iconWidth : "24"}
            height={iconHeight ? iconHeight : "24"}
            className={`${
              iconWidth
                ? `!min-w-[${iconWidth}] w-[${iconWidth}]`
                : "!min-w-[24px] w-[24px]"
            } ${iconStyles}`}
            src={`${rightIcon}`}
            alt={`${iconAlt}`}
          />
        ) : (
          rightIcon
        ))}
    </button>
  );
};
