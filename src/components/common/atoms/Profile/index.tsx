import { styled } from 'styled-components';

type ProfileSizeType = 'small' | 'medium' | 'large';

interface ProfileProps {
  profileSize: ProfileSizeType;
  profileUrl: string;
  onClick?: () => void;
}

const ProfileWrapper = styled.img<{
  profileSize: ProfileSizeType;
}>`
  border-radius: 50%;
  cursor: pointer;
  width: ${({ profileSize }) => {
    switch (profileSize) {
      case 'small':
        return '53px';
      case 'medium':
        return '73px';
      case 'large':
        return '93px';
      default:
        return '53px'; // 기본값
    }
  }};
  height: ${({ profileSize }) => {
    switch (profileSize) {
      case 'small':
        return '53px';
      case 'medium':
        return '73px';
      case 'large':
        return '93px';
      default:
        return '53px'; // 기본값
    }
  }};
`;

const Profile = ({
  profileSize,
  profileUrl,
  onClick,
}: ProfileProps) => {
  return (
    <ProfileWrapper
      profileSize={profileSize}
      src={profileUrl}
      alt="profile image"
      onClick={onClick}
    />
  );
};

export default Profile;
