import IPDisplay from "@/components/IPDisplay";
import GitLabLink from "@/components/GitLabLink";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GitLabLink />
      <IPDisplay />
    </div>
  );
};

export default Index;