import { useLanguage } from "@/contexts/LanguageContext";

export const TopicsSection = () => {
  const { t } = useLanguage();
  const topics = t('topics.list');

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('purpose.title')}</h2>
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-600">{t('purpose.description')}</p>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">{t('topics.title')}</h3>
        <ul className="max-w-3xl mx-auto space-y-4">
          {Array.isArray(topics) && topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};