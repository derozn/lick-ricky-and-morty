import { FC } from 'react';
import NextImage from 'next/image';
import { Button } from '@/components/_atoms/Button';
import { Article, AttributeList, AttributeItem, Content } from './CharacterCard.styles';

export const CharacterCard: FC<LickApi.ICharacterCore> = ({ avatar, name, gender, species }) => (
  <Article>
    <NextImage src={avatar} alt={name} height={320} width={320} layout="responsive" />
    <Content>
      <AttributeList>
        <AttributeItem>Name: {name}</AttributeItem>
        <AttributeItem>Gender: {gender}</AttributeItem>
        <AttributeItem>Species: {species}</AttributeItem>
      </AttributeList>
      <Button>View Profile</Button>
    </Content>
  </Article>
);
