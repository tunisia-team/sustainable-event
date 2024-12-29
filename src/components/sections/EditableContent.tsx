import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ContentEditor } from "@/components/ContentEditor";

interface EditableContentProps {
  sectionKey: string;
  defaultContent: string;
  className?: string;
}

export const EditableContent = ({ sectionKey, defaultContent, className }: EditableContentProps) => {
  const [content, setContent] = useState(defaultContent);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(!!session);
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAdmin(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from("content")
        .select("content")
        .eq("section_key", sectionKey)
        .maybeSingle(); // Changed from .single() to .maybeSingle()

      if (!error && data) {
        setContent(data.content);
      } else {
        // If no content found, use default content
        setContent(defaultContent);
      }
    };

    fetchContent();
  }, [sectionKey, defaultContent]);

  if (isAdmin) {
    return (
      <ContentEditor
        sectionKey={sectionKey}
        initialContent={content}
        onSave={() => {}}
      />
    );
  }

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
};