'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * Brand mark. Renders /public/logo.png if present, otherwise falls back to
 * /public/logo.svg automatically (via onError).
 *
 * Drop your file at:  trishul-next/public/logo.png
 * Recommended: transparent background, square aspect (1024×1024),
 * white artwork — displays directly on the dark UI.
 *
 * If your PNG isn't square, pass `aspect={height/width}`.
 */

type LogoProps = {
  size?: number;
  aspect?: number;
  className?: string;
  priority?: boolean;
};

export default function Logo({ size = 28, aspect = 1, className, priority }: LogoProps) {
  const [src, setSrc] = useState('/logo.png');
  const height = Math.round(size * aspect);
  return (
    <Image
      src={src}
      alt="Trishul Aero"
      width={size}
      height={height}
      className={className}
      priority={priority}
      onError={() => setSrc('/logo.svg')}
    />
  );
}
