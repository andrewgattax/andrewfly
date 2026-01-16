import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';

export function Portfolio() {
    const { t } = useTranslation();

    const projects = [
        { id: 1, titleKey: 'project1', image: 'bg-zinc-800' },
        { id: 2, titleKey: 'project2', image: 'bg-zinc-700' },
        { id: 3, titleKey: 'project3', image: 'bg-zinc-600' },
    ];

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    {t('portfolio.title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className={`absolute inset-0 ${project.image} transition-transform duration-700 group-hover:scale-110`} />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {t(`portfolio.${project.titleKey}.title`)}
                                </h3>
                                <p className="text-sm text-gray-200">
                                    {t(`portfolio.${project.titleKey}.desc`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
