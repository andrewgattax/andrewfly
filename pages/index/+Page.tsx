import '@/i18n';
import { ContactForm } from '@/components/custom/ContactForm';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Settings, Video, Sprout, MapPin, Cloud, Box, Wind, Zap, Film } from 'lucide-react';
import { ServiceCard } from '@/components/custom/ServiceCard';
import { FeatureInfoCard } from '@/components/custom/FeatureInfoCard';
import { StatsCard } from '@/components/custom/StatsCard';
import { Button } from '@/components/ui/button';
import { TextLogo } from '@/components/custom/textlogo';

export default function LandingPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Settings,
      title: t('services.industrial.title'),
      description: t('services.industrial.description'),
      linkText: t('services.industrial.cta'),
      linkHref: '#industrial'
    },
    {
      icon: Video,
      title: t('services.video.title'),
      description: t('services.video.description'),
      linkText: t('services.video.cta'),
      linkHref: '#video'
    },
    {
      icon: Sprout,
      title: t('services.agriculture.title'),
      description: t('services.agriculture.description'),
      linkText: t('services.agriculture.cta'),
      linkHref: '#agriculture'
    },
  ];

  const featureInfos = [
    {
      icon: MapPin,
      title: t('features.precision.title'),
      description: t('features.precision.description')
    },
    {
      icon: Cloud,
      title: t('features.data.title'),
      description: t('features.data.description')
    },
    {
      icon: Box,
      title: t('features.3dmodels.title'),
      description: t('features.3dmodels.description')
    },
  ];

  const fpvFeatureInfos = [
    {
      icon: Zap,
      title: t('fpvFeatures.dynamic.title'),
      description: t('fpvFeatures.dynamic.description')
    },
    {
      icon: Wind,
      title: t('fpvFeatures.immersive.title'),
      description: t('fpvFeatures.immersive.description')
    },
    {
      icon: Film,
      title: t('fpvFeatures.cinematic.title'),
      description: t('fpvFeatures.cinematic.description')
    },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* Background Ambience - Subtle Cosmic Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full" />
      </div>

      {/* HeroSection */}
      <section className="relative px-6 py-12 lg:px-10 lg:py-20 overflow-visible">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Left Column: Text */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className=""
            >
              <TextLogo
                size="xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="h-px w-full bg-border my-6 origin-left"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-foreground text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-lg lg:text-xl font-normal mb-10 max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="px-8 py-6 rounded-lg text-base font-bold"
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  <span>{t('hero.cta')}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Image & Geometric Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block h-full min-h-[500px] flex items-center justify-center"
          >
            {/* Secondary Image - Rotated Background */}
            <div className="absolute top-[5%] right-[5%] w-[90%] h-[90%] rounded-2xl z-0 rotate-3 overflow-hidden shadow-md">
              <img
                src="/images/hero/hero1.webp"
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ambient Glows */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-3xl opacity-30 z-0" />
            <div className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl z-0" />

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[3/4] w-[80%] max-w-[400px]">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-20 pointer-events-none" />
              <img
                src="/images/hero/hero2.webp"
                alt="Andrew Sky"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SectionHeader: Servizi */}
      <section className="relative bg-transparent py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="max-w-[1280px] mx-auto px-10 border-t border-border pt-16 text-center relative z-10"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 inline-block text-glow-primary">
            {t('sectionHeaders.services.label')}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-surface">
            {t('sectionHeaders.services.title')}
          </h2>
        </motion.div>
      </section>

      {/* FeatureSection: Soft Grey Variant */}
      <section className="relative bg-accent/50 py-24 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-4 text-surface">
                  {t('feature.title')}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('feature.description')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featureInfos.map((feature, index) => (
                  <FeatureInfoCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              <div className="pt-2">
                <Button asChild className="w-fit">
                  <a href="#photogrammetry">
                    {t('feature.cta')}
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl border-8 border-background backdrop-blur-md" />
              <StatsCard value={t('feature.stats.value')} label={t('feature.stats.label')} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FeatureSection: FPV (White Variant, Flipped) */}
      <section className="relative bg-transparent py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Column (Right on Desktop) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="flex flex-col gap-8 lg:order-2"
            >
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-4 text-surface">
                  {t('fpvFeature.title')}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('fpvFeature.description')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fpvFeatureInfos.map((feature, index) => (
                  <FeatureInfoCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              <div className="pt-2">
                <Button asChild className="w-fit">
                  <a href="#fpv">
                    {t('fpvFeature.cta')}
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Image Column (Left on Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-1"
            >
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 shadow-2xl border-8 border-border backdrop-blur-md" />
              <StatsCard value={t('fpvFeature.stats.value')} label={t('fpvFeature.stats.label')} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TextGrid: Other Services */}
      <section className="relative bg-accent/50 py-24 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  linkText={service.linkText}
                  linkHref={service.linkHref}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative bg-transparent py-20 px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="max-w-[960px] mx-auto text-center bg-card/80 p-12 rounded-3xl shadow-sm border border-border backdrop-blur-xl relative z-10"
        >
          {/* Subtle glow behind CTA */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-3xl pointer-events-none" />

          <h2 className="text-3xl lg:text-4xl font-black mb-6 text-surface relative z-10">
            {t('cta.title')}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto relative z-10">
            {t('cta.description')}
          </p>
          <div className="flex flex-col gap-4 justify-center relative z-10 w-full">
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
