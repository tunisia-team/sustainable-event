import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface ContentEditorProps {
  sectionKey: string;
  initialContent: string;
  onSave: () => void;
}

export const ContentEditor = ({ sectionKey, initialContent, onSave }: ContentEditorProps) => {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from("content")
        .update({ content })
        .eq("section_key", sectionKey);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content updated successfully"
      });
      setIsEditing(false);
      onSave();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update content"
      });
    }
  };

  if (!isEditing) {
    return (
      <div className="relative group">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Button
          variant="outline"
          size="sm"
          className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px]"
      />
      <div className="flex gap-2">
        <Button onClick={handleSave}>Save</Button>
        <Button variant="outline" onClick={() => setIsEditing(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};