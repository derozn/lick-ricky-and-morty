import { FC } from 'react';
import { ProfileImage } from '@/components/_atoms/ProfileImage';
import { Section, Bio, Title, Attribute, ContentSection } from './CharacterDetails.styles';

interface ICharacterDetailsProp {
  character: LickApi.ICharacter;
}

export const CharacterDetails: FC<ICharacterDetailsProp> = ({ character }) => {
  const [firstEpisode, lastEpisode] = character.episodes;

  return (
    <Section>
      <Bio>
        <ProfileImage src={character.avatar} alt={character.name} />
        <div>
          <Title>{character.name}</Title>
          <Attribute>Status: {character.status}</Attribute>
          <Attribute>Origin: {character.origin}</Attribute>
        </div>
      </Bio>

      <ContentSection>
        <Title>Location Details:</Title>
        <Attribute>Name: {character.location.name}</Attribute>
        <Attribute>Type: {character.location.type}</Attribute>
        <Attribute>Dimension: {character.location.dimension}</Attribute>
        <Attribute>No. of residents: {character.location.noOfResidents}</Attribute>
      </ContentSection>

      <ContentSection>
        <Title>Episodes ({character.totalEpisodeCount})</Title>

        {firstEpisode ? (
          <>
            <Attribute>First appearance: {firstEpisode.name}</Attribute>
            <Attribute>First appearance air date: {firstEpisode.airDate}</Attribute>
            <Attribute>First appearance character count: {firstEpisode.noOfCharacters}</Attribute>
          </>
        ) : null}

        {lastEpisode ? (
          <>
            <Attribute>Last appearance: {lastEpisode.name}</Attribute>
            <Attribute>Last appearance air date: {lastEpisode.airDate}</Attribute>
            <Attribute>Last appearance character count: {lastEpisode.noOfCharacters}</Attribute>
          </>
        ) : null}
      </ContentSection>
    </Section>
  );
};
