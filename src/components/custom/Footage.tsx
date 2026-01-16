import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';

export function Footage() {
    const { t } = useTranslation();

    return (
        <section id="footage" className="py-24 bg-background overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 text-primary">
                        <Film className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t('services.footage.title')}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {t('services.footage.description')}
                    </p>
                </div>

                {/* Dynamic Abstract Content for "Cinematic" feel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 group">
                        {/* Video Placeholder */}
                        <div className="w-full h-full flex items-center justify-center bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                            <span className="text-zinc-500 font-medium tracking-widest">CINEMATIC REEL</span>
                        </div>
                    </div>
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 group">
                        {/* Video Placeholder */}
                        <div className="w-full h-full flex items-center justify-center bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                            <span className="text-zinc-500 font-medium tracking-widest">FPV ACTION</span>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="hover:scale-105 transition-transform"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {t('services.footage.cta')}
                    </Button>
                </div>
            </div>
        </section>
    );
}
