import React from 'react';

interface IndexProps {
  message: string;
  script: string; // injected by react-ssr automatically
}

const Index = (props: IndexProps) => {
  return (
    <React.Fragment>
      <p>{props.message}</p>
    </React.Fragment>
  );
};

export default Index;
