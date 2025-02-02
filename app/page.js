import Countdown from "@/components/Countdown";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const targetDate = '2025-03-27T23:59:59';
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src="/qv.png" alt="panthalasso" width={1000} height={100} className="mt-48"></Image>
      
      <Countdown targetDate={targetDate} />
    </div>
  );
}
