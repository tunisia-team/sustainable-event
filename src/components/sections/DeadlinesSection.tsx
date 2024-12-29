import { useLanguage } from "@/contexts/LanguageContext";

export const DeadlinesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gray-50" id="schedule">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('deadlines.title')}</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-white rounded-lg shadow-sm">
            <span className="font-medium mb-2 sm:mb-0">{t('deadlines.submission')}</span>
            <span className="text-primary">April 7, 2024</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-white rounded-lg shadow-sm">
            <span className="font-medium mb-2 sm:mb-0">{t('deadlines.decision')}</span>
            <span className="text-primary">April 15, 2024</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-white rounded-lg shadow-sm">
            <span className="font-medium mb-2 sm:mb-0">{t('deadlines.confirmation')}</span>
            <span className="text-primary">May 5, 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};