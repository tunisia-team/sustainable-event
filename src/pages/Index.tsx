import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { TopicsSection } from "@/components/sections/TopicsSection";
import { EditableContent } from "@/components/sections/EditableContent";
import { useEffect } from "react";

const Index = () => {
  const { t } = useLanguage();

  // Add smooth scrolling behavior
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          const navbarHeight = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
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

      <OrganizersSection />

      {/* Honorary Guest Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <EditableContent sectionKey="event_honorary" defaultContent={t('event.honorary')} />
          </h2>
          <Card className="max-w-3xl mx-auto p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/lovable-uploads/a9390b77-b36e-489a-914e-1c81818abef0.png" alt="Christian de Boissieu" />
                <AvatarFallback>CdB</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('event.guest.name')}</h3>
                <p className="text-gray-600">{t('event.guest.title')}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">{t('about.challenge')}</p>
          </div>
        </div>
      </section>

      <TopicsSection />

      {/* Deadlines Section */}
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

      {/* Submission Guidelines Section */}
      <section id="submission" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('submission.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p>{t('submission.format')}</p>
            <p>{t('submission.platform')}</p>
            <p className="font-semibold">cmt3.research.microsoft.com/SFM2024/Submission/Index</p>
            <p>{t('submission.publication')}</p>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('fees.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl font-semibold text-center">{t('fees.amount')}</p>
            <p className="text-center">{t('fees.details')}</p>
            <p className="text-center">{t('fees.accommodation')}</p>
            <p className="text-center">
              {t('fees.registration')}{' '}
              <a 
                href="https://drive.google.com/file/d/1I_1R3uYxgbS3_uWwZKbn4BygPxXQY8p6/view?usp=drive_link"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('fees.registration.form')}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section id="committee" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('committee.title')}</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {committeeMembers.map((member, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                {member}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Committee Section */}
      <section id="scientific" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('scientific.title')}</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">
              {scientificCommittee}
            </p>
          </div>
        </div>
      </section>

      {/* Committee Photo */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <img 
            src="/lovable-uploads/60405bd8-d8c8-43f0-af53-9e8cd7407734.png"
            alt="Partners and Sponsors"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
          <p>{t('contact.email')}</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
