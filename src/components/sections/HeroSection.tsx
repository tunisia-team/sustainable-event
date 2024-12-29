import { EditableContent } from "./EditableContent";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl text-primary mb-4">
          <EditableContent sectionKey="event_callForPapers" defaultContent={t('event.callForPapers')} />
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          <EditableContent sectionKey="event_title" defaultContent={t('event.title')} />
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-600 mb-4">
          <EditableContent sectionKey="event_subtitle" defaultContent={t('event.subtitle')} />
        </p>
        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          <EditableContent sectionKey="event_subtitle2" defaultContent={t('event.subtitle2')} />
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="text-lg font-semibold">
            <EditableContent sectionKey="event_date" defaultContent={t('event.date')} />
          </div>
          <div className="hidden sm:block">•</div>
          <div className="text-lg font-semibold">
            <EditableContent sectionKey="event_location" defaultContent={t('event.location')} />
          </div>
        </div>
      </div>
    </section>
  );
};