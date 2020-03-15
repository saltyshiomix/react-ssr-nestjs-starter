import React from 'react';
import { Head } from '@react-ssr/nestjs-express';

interface IndexProps {
  message: string;
}

const Index = (props: IndexProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>An example of @react-ssr/nestjs-express</title>
      </Head>
      <p>{props.message}</p>
      <a href="/about">Go to the about page</a>
    </React.Fragment>
  );
};

export default Index;
