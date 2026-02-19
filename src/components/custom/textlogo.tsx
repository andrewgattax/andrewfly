import { cn } from "@/lib/utils";

interface TextLogoProps {
    className?: string;
    onClick?: () => void;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    glow?: boolean;
}

const sizeClasses = {
    xs: "text-xl",
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl",
    "2xl": "text-8xl",
};

export function TextLogo({ className, onClick, size = "md", glow = false }: TextLogoProps) {
    const textSizeClass = sizeClasses[size];

    return (
        <a
            href="/"
            onClick={onClick}
            className={cn(
                "group flex items-baseline leading-none cursor-pointer transition-all duration-300 rounded-lg decoration-0",
                glow && "hover:drop-shadow-[0_0_15px_rgba(234,89,41,0.5)]",
                className
            )}
        >
            <span className={cn("font-prototype text-surface", textSizeClass)}>Sky</span>
            <span className={cn("font-azonix text-primary", textSizeClass)}>DAR</span>
        </a>
    );
}

