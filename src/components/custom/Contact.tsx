import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function Contact() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, this would send data to backend
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 bg-accent/20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t('contact.title')}
                    </h2>
                    <p className="text-muted-foreground">
                        Ready to fly? Let's discuss your project.
                    </p>
                </div>

                <div className="bg-background rounded-2xl shadow-xl p-8 md:p-12 border border-border/50">
                    {submitted ? (
                        <div className="text-center py-12 animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                                {t('contact.success')}
                            </h3>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="name">{t('contact.name')}</label>
                                    <Input id="name" required placeholder="Mario Rossi" className="bg-accent/10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="email">{t('contact.email')}</label>
                                    <Input id="email" type="email" required placeholder="mario@example.com" className="bg-accent/10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="message">{t('contact.message')}</label>
                                <Textarea id="message" required placeholder="..." rows={5} className="bg-accent/10 resize-none" />
                            </div>
                            <Button type="submit" className="w-full text-lg h-12">
                                {t('contact.submit')}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
