import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'event.title': 'Sustainable Finance 2024',
    'event.subtitle': 'The second Sustainable Finance meeting',
    'event.date': 'May 10-11, 2024',
    'event.location': 'FSEG Sfax - Tunisia',
    'event.callForPapers': 'Call for Papers',
    'event.subtitle2': 'Climate Risks in Africa',
    'event.honorary': 'Honorary guest',
    'event.guest.name': 'Christian de Boissieu',
    'event.guest.title': 'Professor emeritus at Paris-I Panthéon-Sorbonne University, vice-president of the Circle of Economists, member of the Academy of Technologies and the Royal Academy of Belgium and ex-president of the Economic Analysis Council.',
    'about.challenge': "The challenges of ecological transition and climate risks require the involvement of all stakeholders and a combined strategy of at least five actors: universities, businesses, financial institutions, States and Multilateral Governance Institutions. This transition is both an opportunity for economic growth and a duty of compliance and risk management. Some players also understand the interest of digitalization and artificial intelligence applying to develop rigorous sustainable development strategies based on a metric. But it is undeniable that there is still a long way to go to ensure a more serene future for future generations.",
    'purpose.title': "PURPOSE",
    'purpose.description': "These scientific days offer reflection on the theme of Sustainable Finance/CSR/ESG/ISR. Its overall objective is to raise awareness among stakeholders – academics and professionals – of the need to implement responsible strategies within North African and African companies based on innovative ESG impact measurement tools. This approach is necessary to face the risks of climate change on the African continent.",
    'topics.title': 'Topics of interest',
    'topics.list': [
      'Climate change: measurements, modelling, and predictions',
      'Sustainable finance',
      'Sustainable development goals',
      'Environmental, Social, and Governance (ESG) factors',
      'Corporate Social Responsibility (CSR) strategy',
      'Sustainability, regulation and risks',
      'Fintech, digitalisation, technology and Sustainability',
      'Artificial intelligence, blockchain, technology and sustainability',
      'Sustainable accounting',
      'Ethics in finance, islamic finance'
    ],
    'deadlines.title': 'Important Deadlines',
    'deadlines.submission': 'Submission of Communications',
    'deadlines.decision': 'Final Decision',
    'deadlines.confirmation': 'Confirmation of participation of accepted communications',
    'submission.title': 'Guidelines Submissions',
    'submission.format': 'All submissions must be in Word Format (doc, docx)',
    'submission.platform': 'Abstracts and articles can only be submitted online via the following website:',
    'submission.publication': 'Possibility of publication in the African Finance for Development Review for the best communications.',
    'fees.title': 'Participation fees',
    'fees.amount': '220 DT (100 €)',
    'fees.details': 'These fees cover access to sessions, documentation, 4 coffee breaks and 2 lunches.',
    'fees.accommodation': 'Possibility of booking your accommodation in a hotel approved by the FSEG Sfax',
    'fees.registration': 'Once your communication has been accepted, please complete this',
    'fees.registration.form': 'Registration form',
    'committee.title': 'Committee members',
    'scientific.title': 'Scientific Committee',
    'contact.title': 'Contact',
    'contact.email': 'Contact us at: sana.ben.abdallah@fsegs.usf.tn',
    'nav.about': 'About',
    'nav.schedule': 'Schedule',
    'nav.home': 'Home',
  },
  fr: {
    'event.title': 'Finance Durable 2024',
    'event.subtitle': 'Les deuxièmes rencontres de la Finance durable',
    'event.date': '10-11 mai 2024',
    'event.location': 'FSEG Sfax - Tunisie',
    'event.callForPapers': 'Appel à communications',
    'event.subtitle2': 'Risques climatiques en Afrique',
    'event.honorary': 'Invité d\'honneur',
    'event.guest.name': 'Christian de Boissieu',
    'event.guest.title': 'Professeur émérite à l\'Université Paris-I Panthéon-Sorbonne, vice-président du Cercle des économistes, membre de l\'Académie des technologies et de l\'Académie royale de Belgique et ex-président du Conseil d\'analyse économique.',
    'about.challenge': 'Les défis de la transition écologique et des risques climatiques nécessitent l\'implication de toutes les parties prenantes et une stratégie combinée d\'au moins cinq acteurs : universités, entreprises, institutions financières, États et Institutions de gouvernance multilatérale. Cette transition est à la fois une opportunité de croissance économique et un devoir de conformité et de gestion des risques. Certains acteurs comprennent également l\'intérêt de la numérisation et de l\'intelligence artificielle pour développer des stratégies de développement durable rigoureuses basées sur une métrique. Mais il est indéniable qu\'il reste encore un long chemin à parcourir pour assurer un avenir plus serein aux générations futures.',
    'purpose.title': 'OBJECTIF',
    'purpose.description': 'Ces journées scientifiques proposent une réflexion sur le thème de la Finance Durable/RSE/ESG/ISR. Son objectif global est de sensibiliser les parties prenantes – académiques et professionnels – à la nécessité de mettre en œuvre des stratégies responsables au sein des entreprises nord-africaines et africaines basées sur des outils innovants de mesure d\'impact ESG. Cette approche est nécessaire pour faire face aux risques du changement climatique sur le continent africain.',
    'topics.title': 'Sujets d\'intérêt',
    'topics.list': [
      'Changement climatique : mesures, modélisation et prévisions',
      'Finance durable',
      'Objectifs de développement durable',
      'Facteurs environnementaux, sociaux et de gouvernance (ESG)',
      'Stratégie de responsabilité sociétale des entreprises (RSE)',
      'Durabilité, réglementation et risques',
      'Fintech, numérisation, technologie et durabilité',
      'Intelligence artificielle, blockchain, technologie et durabilité',
      'Comptabilité durable',
      'Éthique en finance, finance islamique'
    ],
    'deadlines.title': 'Dates limites importantes',
    'deadlines.submission': 'Soumission des communications',
    'deadlines.decision': 'Décision finale',
    'deadlines.confirmation': 'Confirmation de la participation des communications acceptées',
    'submission.title': 'Directives de soumission',
    'submission.format': 'Toutes les soumissions doivent être au format Word (doc, docx)',
    'submission.platform': 'Les résumés et articles ne peuvent être soumis en ligne que via le site suivant :',
    'submission.publication': 'Possibilité de publication dans la Revue Africaine de la Finance pour le Développement pour les meilleures communications.',
    'fees.title': 'Frais de participation',
    'fees.amount': '220 DT (100 €)',
    'fees.details': 'Ces frais couvrent l\'accès aux sessions, la documentation, 4 pauses café et 2 déjeuners.',
    'fees.accommodation': 'Possibilité de réserver votre hébergement dans un hôtel approuvé par la FSEG Sfax',
    'fees.registration': 'Une fois votre communication acceptée, veuillez remplir ce',
    'fees.registration.form': 'formulaire d\'inscription',
    'nav.about': 'À propos',
    'nav.schedule': 'Programme',
    'nav.home': 'Accueil',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.en];
    // Ensure we always return a string
    return Array.isArray(translation) ? translation.join(', ') : translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}