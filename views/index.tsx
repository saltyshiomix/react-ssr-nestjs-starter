import React from 'react';
import Head from '@react-ssr/nestjs-express/head';
import { Layout } from '../components/Layout';

interface IndexProps {
  message: string;
}

const Index = (props: IndexProps) => {
  return (
    <Layout>
      <Head>
        An example of @react-ssr/nestjs-express
      </Head>
      <p>{props.message}</p>
    </Layout>
  );
};

export default Index;
