import React from 'react';
import NormalPageContainer from '../../../components/Wrappers/NormalPagecontainer';
import CorporatePage from '../../../components/CorporatePage';
const index = () => {
  return (
    <NormalPageContainer isVideoPage={false}>
      <CorporatePage />
    </NormalPageContainer>
  );
};

export default index;
