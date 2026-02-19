import { cn } from "@/lib/utils";

interface LogoFullProps {
    width?: number | string;
    height?: number | string;
    className?: string;
}

export function LogoFull({ width = "auto", height = 48, className }: LogoFullProps) {
    return (
        <a
            href="/"
            className={cn(
                "group flex items-center gap-3 cursor-pointer transition-all duration-300 hover:glow-primary px-2 rounded-lg decoration-0",
                className
            )}
            style={{ width, height }}
        >
            <div className="relative h-full aspect-square">
                <img
                    src="/images/logo/LOGO_SMALL.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex items-baseline leading-none">
                <span className="font-prototype text-surface text-3xl">Sky</span>
                <span className="font-azonix text-primary text-3xl">DAR</span>
            </div>
        </a>
    );
}
