import LoginCard from "@/components/login-card"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/space-background.jpg"
        alt="Space background"
        fill
        className="animate-space-zoom object-cover"
        priority
        quality={100}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-950/30 to-indigo-950/40" />

      {/* Additional animated stars for extra sparkle */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large bright stars */}
        <div className="absolute top-[10%] left-[15%] h-2 w-2 animate-twinkle rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        <div className="absolute top-[20%] right-[20%] h-2 w-2 animate-twinkle-delayed rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        <div className="absolute top-[60%] left-[10%] h-2 w-2 animate-twinkle-slow rounded-full bg-blue-200 shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
        <div className="absolute bottom-[15%] right-[15%] h-2 w-2 animate-twinkle rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

        {/* Medium stars */}
        <div className="absolute top-[30%] left-[25%] h-1.5 w-1.5 animate-twinkle-delayed rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
        <div className="absolute top-[45%] right-[30%] h-1.5 w-1.5 animate-twinkle-slow rounded-full bg-cyan-300/80 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        <div className="absolute bottom-[25%] left-[35%] h-1.5 w-1.5 animate-twinkle rounded-full bg-blue-300/80 shadow-[0_0_8px_rgba(147,197,253,0.6)]" />
      </div>

      {/* Login card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <LoginCard />
      </div>
    </div>
  )
}