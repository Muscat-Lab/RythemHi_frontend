import React from 'react';
import styled from 'styled-components';

type GridProps = {
  rows: number;
  columns: number;
  rowGap?: number;
  columnGap?: number;
  children: React.ReactNode;
};

const StyledGrid = styled.div<GridProps>`
  display: grid;
  place-items: center;

  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-template-columns: repeat(
    ${({ columns }) => columns},
    1fr
  );
  row-gap: ${({ rowGap }) => rowGap || 10}px;
  column-gap: ${({ columnGap }) => columnGap || 10}px;
`;

const Grid = ({
  rows,
  columns,
  rowGap,
  columnGap,
  children,
}: GridProps) => (
  <StyledGrid
    rows={rows}
    columns={columns}
    rowGap={rowGap}
    columnGap={columnGap}
  >
    {children}
  </StyledGrid>
);

export default Grid;
