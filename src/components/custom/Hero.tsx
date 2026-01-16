import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effect - Abstract Drone/Sky related */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            </div>

            <div className="container relative z-10 px-6 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-logo mb-6 animate-fade-in">
                    {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
                    {t('hero.subtitle')}
                </p>
                <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                    <Button
                        size="lg"
                        className="rounded-full text-lg px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {t('hero.cta')}
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
