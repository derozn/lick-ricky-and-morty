import { FC } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Button } from '@/components/_atoms/Button';
import { Article, AttributeList, AttributeItem, Content } from './CharacterCard.styles';

export const CharacterCard: FC<LickApi.ICharacterCore> = ({
  id,
  avatar,
  name,
  gender,
  species,
}) => (
  <Article>
    <NextImage src={avatar} alt={name} height={320} width={320} layout="responsive" />
    <Content>
      <AttributeList>
        <AttributeItem>Name: {name}</AttributeItem>
        <AttributeItem>Gender: {gender}</AttributeItem>
        <AttributeItem>Species: {species}</AttributeItem>
      </AttributeList>
      <NextLink
        href={{
          pathname: '/character/[slug]',
          query: { slug: id },
        }}
      >
        <Button>View Profile</Button>
      </NextLink>
    </Content>
  </Article>
);
