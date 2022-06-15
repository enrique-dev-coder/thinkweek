import ContactPage from '../components/ContactPage';
import NormalPagecontainer from '../components/Wrappers/NormalPagecontainer';
const contact = () => {
  return (
    <NormalPagecontainer isVideoPage={true}>
      <ContactPage />
    </NormalPagecontainer>
  );
};

export default contact;
