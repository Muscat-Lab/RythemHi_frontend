import React from 'react';

export const lazy = (componentImportFn: Function) =>
  React.lazy(async () => {
    const obj = await componentImportFn();
    return typeof obj.default === 'function'
      ? obj
      : obj.default;
  });

export type SVGIconKeys =
  | 'homeIcon'
  | 'searchIcon'
  | 'backButtonIcon'; // 필요한 키들을 추가

const SVG_ICON_MAP = {
  homeIcon: lazy(() => import('@/assets/icon/home.svg')),
  searchIcon: lazy(
    () => import('@/assets/icon/search.svg'),
  ),
  backButtonIcon: lazy(
    () => import('@/assets/icon/back-button.svg'),
  ),
};

export default SVG_ICON_MAP;
