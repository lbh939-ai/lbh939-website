import Image from "next/image";
import { TelegramBotIcon } from "./TelegramBotIcon";

/** 앱·봇 아이콘. 아이콘 파일이 없는 텔레그램 봇은 강조색 박스 + 전용 아이콘으로 표시한다. */
export function ProjectIcon({ name, icon, size }: { name: string; icon?: string; size: number }) {
  const box = "shrink-0 overflow-hidden rounded-[22%]";
  if (!icon) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`${box} bg-[var(--accent)] text-white inline-flex items-center justify-center`}
      >
        <TelegramBotIcon size={size * 0.5} />
      </div>
    );
  }
  return (
    <Image
      src={icon}
      alt={`${name} 아이콘`}
      width={size}
      height={size}
      className={`${box} border border-[var(--card-border)]/60 object-cover`}
    />
  );
}
