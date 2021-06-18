import { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { requestWithAbsoluteUrl } from '@/lib/absoluteRequest';

const HomePage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <div>{JSON.stringify(data)}</div>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data } = await requestWithAbsoluteUrl<LickApi.ICharacterCoreResponse>(
    req,
    '/api/character',
  );

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
