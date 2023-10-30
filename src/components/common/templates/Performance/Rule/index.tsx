import styled from 'styled-components';

const RuleContentWrapper = styled.div`
  color: #fff;
  font-size: 14px;
`;

const RuleLi = styled.li`
  margin: 21px 0;
`;

const RuleContent = () => {
  return (
    <RuleContentWrapper>
      {/* Image로 들어갈 예정 */}
      <ul>
        <RuleLi>이용 전일 17시 이후 취소 불가</RuleLi>
        <RuleLi>
          예매 후 7일 이내라도 취소시점이 관람일로부터 10일
          이내라면 관람일에 해당하는 취소수수료가
          부과됩니다.
        </RuleLi>
        <RuleLi>
          기간상품일 경우, 상품 종료일자 기준으로
          정해집니다.
        </RuleLi>
      </ul>
    </RuleContentWrapper>
  );
};

export default RuleContent;
