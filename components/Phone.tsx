import Image from "next/image";

/**
 * 실제 앱 화면을 담은 폰 (= 첫 화면의 제품 사진, 앱 타일 아래에서 올라온 화면).
 * - 화면 위에 상태 표시줄 자리(앱 화면과 같은 흰색)와 다이내믹 아일랜드를 둬서
 *   앱 제목이 둥근 모서리에 잘리지 않고 실제 기기처럼 보이게 한다.
 * - 둥글기·테두리는 폰 자신의 폭에 비례(cqw)해서, 폰이 작아져도 비율이 같다.
 * - peek = 위쪽만 보이는 폰(아래는 타일이 잘라냄): 위 모서리만 둥글다.
 */
export function Phone({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  peek,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  peek?: boolean;
  className?: string;
}) {
  const frame = peek ? "rounded-t-[14cqw] px-[3cqw] pt-[3cqw]" : "rounded-[14cqw] p-[3cqw]";
  const screen = peek ? "rounded-t-[11cqw]" : "rounded-[11cqw]";
  return (
    <div className={`@container ${className}`}>
      <div className={`bg-[var(--device)] shadow-[var(--shadow-product)] ring-1 ring-white/10 ${frame}`}>
        <div className={`relative overflow-hidden bg-[#fefefe] ${screen}`}>
          <div aria-hidden className="relative h-[12cqw]">
            <span className="absolute left-1/2 top-[3cqw] h-[6.5cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-[var(--device)]" />
          </div>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            className={peek ? "h-[260px] w-full object-cover object-top sm:h-[300px]" : "h-auto w-full"}
          />
        </div>
      </div>
    </div>
  );
}
