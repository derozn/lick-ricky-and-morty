import { FC } from 'react';
import NextImage from 'next/image';
import { RoundedImage } from './ProfileImage.styles';

interface IProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImage: FC<IProfileImageProps> = ({ src, alt }) => (
  <RoundedImage>
    <NextImage src={src} alt={alt} height={320} width={320} layout="responsive" />
  </RoundedImage>
);

export default ProfileImage;
