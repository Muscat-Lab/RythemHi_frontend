import LoadingSpinner from '@/components/common/atoms/LoadingSpinner';
import Profile from '@/components/common/atoms/Profile';
import Text from '@/components/common/atoms/Text';
import useGetCastings from '@/hooks/Performances/useGetCastings';
import { CastingType } from '@/interface/performance';
import { flexbox } from '@/styles/mixin';
import styled from 'styled-components';

const CastingBoardWrapper = styled.section`
  ${flexbox({ dir: 'column' })}
`;

const Header = styled.header`
  ${flexbox({ jc: 'space-between', ai: 'center' })}
  margin-bottom: 24px;
`;

const Boards = styled.div`
  ${flexbox({})}
  gap: 17px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const CastingBoard = ({
  performanceId,
}: {
  performanceId: string;
}) => {
  const { castings, castingsLoading } =
    useGetCastings(performanceId);

  if (castingsLoading) {
    return <LoadingSpinner loadingSize="small" />;
  }

  return (
    <CastingBoardWrapper>
      <Header>
        <Text
          textSize="medium"
          textType="bold"
          textColor="#fff"
        >
          캐스팅 보드
        </Text>
        <Text textSize="small" textColor="#fff">
          캐스팅 일정조회
        </Text>
      </Header>
      {castings && (
        <Boards>
          {castings.map((casting: CastingType) => {
            return (
              <div>
                <Profile
                  profileSize="small"
                  profileUrl={casting.profileUrl}
                />
                <Text textSize="small" textColor="#fff">
                  {casting.performerName}
                </Text>
              </div>
            );
          })}
        </Boards>
      )}
    </CastingBoardWrapper>
  );
};

export default CastingBoard;
