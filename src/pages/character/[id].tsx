import { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Meta } from '@/components/_shared/Meta';
import { requestWithAbsoluteUrl } from '@/lib/absoluteRequest';
import { Home } from '@/components/_templates/Home';

const CharacterPage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Meta title="Information about your character." />
    <Home data={data} />
  </>
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

export default CharacterPage;
