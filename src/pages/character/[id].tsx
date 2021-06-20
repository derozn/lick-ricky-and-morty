import { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Meta } from '@/components/_shared/Meta';
import { requestWithAbsoluteUrl } from '@/lib/absoluteRequest';
import { Character } from '@/components/_templates/Character';

const CharacterPage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Meta title="Information about your character." />
    <Character data={data} />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ req, query: { id } }) => {
  const { data } = await requestWithAbsoluteUrl<LickApi.ICharacterResponse>(
    req,
    `/api/character/${id}`,
  );

  return {
    props: {
      data,
    },
  };
};

export default CharacterPage;
