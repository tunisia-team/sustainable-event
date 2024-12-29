import { useLanguage } from "@/contexts/LanguageContext";
import { EditableContent } from "./EditableContent";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HonoraryGuestSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          <EditableContent sectionKey="event_honorary" defaultContent={t('event.honorary')} />
        </h2>
        <Card className="max-w-3xl mx-auto p-8">
          <CardContent className="p-0">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};