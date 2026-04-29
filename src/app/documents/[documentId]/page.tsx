import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdPageProps {
  params: { documentId: string };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const { documentId } = params;

  return (
    <div className="p-4 space-y-4">
      <Toolbar />
      <Editor/>
    </div>
  );
};

export default DocumentIdPage;