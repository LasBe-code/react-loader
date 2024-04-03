# @lasbe/loader

[NPM](https://www.npmjs.com/package/@lasbe/loader)
[Github](https://github.com/LasBe-code/react-loader)
[Blog](https://lasbe.tistory.com/)
로딩 상태를 표현하기 위한 가장 기본적인 생김새의 Loader 컴포넌트입니다.  
기본 값을 설정하고 싶으면 Provider를 감아주시고, `defaultStyle`에 값을 넣어주시면 됩니다.

### install

```bash
$ npm i @lasbe/loader
```

### example

```tsx
import { Loader, LoaderProvider } from '@lasbe/loader';

function App() {
  return (
    <LoaderProvider defaultStyle={{ color: 'red', size: 'lg' }}>
      <div>
        <Loader isLoading={true} size="xxl" color="blue" />
        <Loader />
      </div>
    </LoaderProvider>
  );
}

export default App;
```

### props

```ts
// Loader Size
type LoaderSizeType = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Loader Component
type LoaderPropsType = {
  isLoading?: boolean;
  size?: LoaderSizeType;
  color?: string;
};

// Loader Provider
type LoaderDefaultStyle = {
  size?: LoaderSizeType;
  color?: string;
};
```

### default value

```tsx
const defaultValues: LoaderDefaultStyle = {
  size: 'md',
  color: '#000',
};
```
