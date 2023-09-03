module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb',
    'prettier',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:storybook/recommended',
  ],
  // TypeScript를 사용하는 프로젝트에서 ESLint를 사용할 때 코드 구문 분석을 위해 파서 등록
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  // import : ES6의 import/export 문법에 대한 linting을 제공합니다. 또한 파일 경로 문제, 필요없는 의존성, 중복된 import 등 다양한 문제를 감지하는 추가 규칙을 제공
  // typescript-eslint: TypeScript의 특정 구문과 기능에 대한 규칙을 제공합니다. 예를 들어, 타입 정의, 인터페이스 사용 방법 등 TypeScript에 특화된 규칙을 포함
  // [보류] jest: Jest 테스트 프레임워크에 특화된 linting 규칙을 제공, 예를 들면, 유효하지 않은 테스트 사용, 권장되지 않는 Jest 함수 사용 등의 문제를 감지
  plugins: [
    'import',
    '@typescript-eslint',
    'prettier',
    'jest',
  ],
  settings: {
    // ESLint에게 모듈 해석(resolution) 방법에 대한 정보를 제공하는 부분
    // TypeScript의 특별한로직과 tsconfig.json 파일의 설정을 고려하여 import 문을 올바르게 처리하기 위한 것
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error', // 잘못된 import 순서를 발견하면 에러를 발생
      {
        // import의 그룹화 순서를 정의. 여기서는 내장 모듈, 외부 모듈, 내부 모듈, 상위 디렉터리, 형제 디렉터리, 인덱스 파일 순서로 그룹화
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        // import문 내에서 모듈의 순서를 알파벳 순으로 정렬하게 됩니다. 대소문자를 구분하지 않도록 설정
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        // 서로 다른 import 그룹 간에는 항상 새로운 줄
        'newlines-between': 'always',
      },
    ],
    'react/function-component-definition': [
      2, // 0은 규칙을 비활성화, 1은 경고, 2는 오류로 규칙을 적용
      {
        // 컴포넌트 어떤방식으로 결정할지 정의
        // function-declaration: 표준 함수 선언 방식을 사용하여 컴포넌트를 선언하도록 허용 function MyComponent() { ... }
        // arrow-function: 화살표 함수를 사용하여 컴포넌트를 선언하도록 허용 const MyComponent = () => { ... }
        namedComponents: [
          'function-declaration',
          'arrow-function',
        ],
      },
    ],
    'import/extensions': [
      2, // 0은 규칙을 비활성화, 1은 경고, 2는 오류로 규칙을 적용
      {
        // 패키지(import가 node_modules로부터 하는 경우 등)에 대해서는 확장자를 포함하지 않아도 됩니다
        ignorePackages: true,
        // 아래 확장자들은 포함하지 않아도됨.
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    'react/require-default-props': 'off', //
    'react/jsx-one-expression-per-line': 'off', //
    'react/react-in-jsx-scope': 'off', //
    // off로 하여금 spreading를 통해 props를 다른 컴포넌트로 보낼때 {...props}형태로 사용
    'react/jsx-props-no-spreading': 'off',
    // 연산자의 위치에 따라 줄바꿈을 강제. 예를 들어, 연산자를 줄의 시작 또는 끝에 위치시키기 위한 것
    'operator-linebreak': 'off',
    // 모듈에서 하나의 이름을 내보낼 때 기본 내보내기(default export)를 사용하도록 권장합니다. "off"로 설정하면 이 규칙을 비활성화
    'import/prefer-default-export': 'off',
    // 화살표 함수의 본문이 줄바꿈과 함께 시작될 때 강제로 위치를 조절
    'implicit-arrow-linebreak': 'off',
    // 함수 괄호 내의 줄바꿈을 일관되게 강제
    'function-paren-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
