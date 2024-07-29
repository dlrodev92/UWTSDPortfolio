
import PageLinkButton from './PageLinkButton'; 

const AssessmentFooter = ({ links }) => {
  return (
    <div className="w-full flex justify-around p-4 bg-gray-200 text-white">
      {links.map((link, index) => (
        <PageLinkButton 
          key={index}
          to={link.href}
        >
          {link.text}
        </PageLinkButton>
      ))}
    </div>
  );
};

export default AssessmentFooter;
