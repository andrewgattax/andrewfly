import { cn } from "@/lib/utils";

interface LogoProps {
    width?: number | string;
    height?: number | string;
    className?: string;
}

export function Logo({ width = 48, height = 48, className }: LogoProps) {
    return (
        <a
            href="/"
            className={cn(
                "block relative cursor-pointer transition-all duration-300 hover:glow-primary rounded-full",
                className
            )}
            style={{ width, height }}
        >
            <img
                src="/images/logo/LOGO_SMALL.png"
                alt="Logo"
                className="w-full h-full object-contain"
            />
        </a>
    );
}
