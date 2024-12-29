import { useLanguage } from "@/contexts/LanguageContext";

const committeeMembers = [
  "Prof. Younes Boujelbene (FSEG Sfax)",
  "Prof. Lotfi Belkacem (FSEG Sfax)",
  "Prof. Chokri Abdennadher (FSEG Sfax)",
  "Prof. Sami Hammami (FSEG Sfax)",
  "Prof. Anis Jarboui (FSEG Sfax)",
  "Prof. Habib Affes (FSEG Sfax)",
  "Prof. Fatma Siala Guermazi (FSEG Sfax)",
  "Prof. Fatma Wyème Ben Mrad Douagi (FSEG Sfax)",
  "Prof. Sonia Rebai (FSEG Sfax)",
  "Prof. Anis Ben Amar (FSEG Sfax)",
  "Prof. Anis Ben Abdallah (FSEG Sfax)",
  "Prof. Fatma Mchirgui Zouari (FSEG Sfax)",
  "Prof. Wajdi Fendri (FSEG Sfax)"
];

const scientificCommittee = `Prof. Christian de Boissieu (Université Paris 1 Panthéon-Sorbonne), Prof. Younes Boujelbene (FSEG Sfax), Prof. Lotfi Belkacem (FSEG Sfax), Prof. Chokri Abdennadher (FSEG Sfax), Prof. Sami Hammami (FSEG Sfax), Prof. Anis Jarboui (FSEG Sfax), Prof. Habib Affes (FSEG Sfax), Prof. Fatma Siala Guermazi (FSEG Sfax), Prof. Fatma Wyème Ben Mrad Douagi (FSEG Sfax), Prof. Sonia Rebai (FSEG Sfax), Prof. Anis Ben Amar (FSEG Sfax), Prof. Anis Ben Abdallah (FSEG Sfax), Prof. Fatma Mchirgui Zouari (FSEG Sfax), Prof. Wajdi Fendri (FSEG Sfax)`;

export const CommitteeSection = () => {
  const { t } = useLanguage();

  return (
    <>
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
    </>
  );
};