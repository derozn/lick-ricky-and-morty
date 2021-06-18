import React from 'react';
import Head from 'next/head';

interface IMetaProps {
  title: string;
}

export const Meta: React.FunctionComponent<IMetaProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);
