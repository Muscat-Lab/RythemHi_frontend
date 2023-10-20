import InfoTag from '@/components/common/molecules/InfoTag';
import { flexbox } from '@/styles/mixin';
import styled from 'styled-components';

interface CategoryProps {
  data: string[];
}

const CategoryWrapper = styled.div`
  ${flexbox({})}
  gap: 9px;
  margin: 26px 0;
  padding: 0 21px;
`;

const Category = ({ data }: CategoryProps) => {
  return (
    <CategoryWrapper>
      {data &&
        data.map((d) => {
          return (
            <InfoTag
              key={d}
              color="#4845CC"
              bgColor="#4845CC"
              text={d}
            />
          );
        })}
    </CategoryWrapper>
  );
};

export default Category;
