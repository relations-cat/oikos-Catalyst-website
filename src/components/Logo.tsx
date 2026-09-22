import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logos/oikos-catalyst-logo.png"
      alt="oikos Catalyst"
      width={200}
      height={200}
      className={className}
      priority
    />
  );
}
