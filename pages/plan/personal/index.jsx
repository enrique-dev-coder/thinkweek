import React from 'react';
import NormalPageContainer from '../../../components/Wrappers/NormalPagecontainer';
import PersonalPage from '../../../components/PersonalPage';
const index = () => {
  return (
    <NormalPageContainer isVideoPage={false}>
      <PersonalPage />
    </NormalPageContainer>
  );
};

export default index;
