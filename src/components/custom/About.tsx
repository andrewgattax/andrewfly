import { useTranslation } from 'react-i18next';
import { User, ShieldCheck, Zap } from 'lucide-react';

export function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 bg-accent/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Placeholder for Profile Image */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                                <User className="w-32 h-32 text-muted-foreground/30" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-logo text-primary">
                            {t('about.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {t('about.description')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-background shadow-sm border border-border/50">
                                <Zap className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Dynamic FPV</h3>
                                    <p className="text-sm text-muted-foreground">High-speed, immersive footage.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-background shadow-sm border border-border/50">
                                <ShieldCheck className="w-6 h-6 text-secondary mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Certified Pilot</h3>
                                    <p className="text-sm text-muted-foreground">Professional & Safe operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
