import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { TopicsSection } from "@/components/sections/TopicsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HonoraryGuestSection } from "@/components/sections/HonoraryGuestSection";
import { CommitteeSection } from "@/components/sections/CommitteeSection";
import { DeadlinesSection } from "@/components/sections/DeadlinesSection";
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
      <HeroSection />
      <OrganizersSection />
      <HonoraryGuestSection />

      {/* Challenge Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">{t('about.challenge')}</p>
          </div>
        </div>
      </section>

      <TopicsSection />
      <DeadlinesSection />

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

      <CommitteeSection />

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