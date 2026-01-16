import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Map, Cuboid, Ruler } from 'lucide-react';

export function Surveys() {
    const { t } = useTranslation();

    return (
        <section id="surveys" className="py-24 bg-accent/10 border-y border-border/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-background rounded-lg shadow-sm border border-border p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors">
                                <Map className="w-10 h-10 text-secondary mb-4" />
                                <span className="font-semibold text-sm">2D Mapping</span>
                            </div>
                            <div className="aspect-square bg-background rounded-lg shadow-sm border border-border p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors">
                                <Cuboid className="w-10 h-10 text-secondary mb-4" />
                                <span className="font-semibold text-sm">3D Models</span>
                            </div>
                            <div className="col-span-2 aspect-[2/1] bg-background rounded-lg shadow-sm border border-border p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors">
                                <Ruler className="w-10 h-10 text-secondary mb-4" />
                                <span className="font-semibold text-sm">Precision Measurements</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            {t('services.surveys.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {t('services.surveys.description')}
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                <span className="text-foreground/80">Orthomosaics</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                <span className="text-foreground/80">Digital Surface Models (DSM)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary" />
                                <span className="text-foreground/80">Construction Progress Monitoring</span>
                            </li>
                        </ul>
                        <Button
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t('services.surveys.cta')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
