import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & React.ComponentProps<typeof Image>;

export default function BlurImage({
  src,
  quality,
  alt,
  width,
  height,
  layout,
  priority,
  className,
}: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt={alt}
      src={src}
      quality={quality}
      layout={layout}
      priority={priority}
      width={width}
      height={height}
      className={twMerge(
        `
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`,
        className
      )}
      onLoad={() => setLoading(false)}
    />
  );
}
