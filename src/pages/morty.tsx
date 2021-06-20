import { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Meta } from '@/components/_shared/Meta';
import { requestWithAbsoluteUrl } from '@/lib/absoluteRequest';
import { Home } from '@/components/_templates/Home';

const MortyPage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Meta title="All about Morty!" />
    <Home data={data} />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data } = await requestWithAbsoluteUrl<LickApi.ICharacterCoreResponse>(
    req,
    '/api/characters',
    {
      query: {
        name: 'morty',
      },
    },
  );

  return {
    props: {
      data,
    },
  };
};

export default MortyPage;
