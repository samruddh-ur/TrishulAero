import Image from 'next/image';

/**
 * Brand mark. Renders /public/logo.png.
 *
 * Drop your PNG at:  trishul-next/public/logo.png
 * Recommended: transparent background, square (e.g. 1024×1024),
 * white artwork — displays directly on the dark UI.
 *
 * If your file isn't square, pass `aspect` (height ÷ width) e.g. aspect={1.2}.
 */

type LogoProps = {
  size?: number;
  aspect?: number;
  className?: string;
  priority?: boolean;
};

export default function Logo({ size = 28, aspect = 1, className, priority }: LogoProps) {
  const height = Math.round(size * aspect);
  return (
    <Image
      src="/logo.png"
      alt="Trishul Aero"
      width={size}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
