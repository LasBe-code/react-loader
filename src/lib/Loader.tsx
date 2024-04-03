import './css/loader.css';
import { useLoaderDefaultStyle } from './LoaderProvider';
import { LoaderSizeType, LoaderPropsType } from './loaderType';

const getSize = (size: LoaderSizeType) => {
  switch (size) {
    case 'sm':
      return '12px';
    case 'md':
      return '16px';
    case 'lg':
      return '20px';
    case 'xl':
      return '32px';
    case 'xxl':
      return '48px';
    default:
      return '16px';
  }
};

/**
 * Loader 컴포넌트
 * @param isLoading 로딩 여부
 * @param size 로더 크기 ('sm' | 기본값: 'md' | 'lg' | 'xl' | 'xxl')
 * @param color 로더 색상 (기본값: #000)
 * @description
 * 기본값을 설정하려면 LoaderProvider를 사용하세요.
 */
export const Loader = ({ isLoading, size, color }: LoaderPropsType) => {
  const { color: defaultColor, size: defaultSize } = useLoaderDefaultStyle();
  const loaderSize = getSize(size || defaultSize || 'md');
  return isLoading ? (
    <span className="loader" style={{ width: loaderSize, height: loaderSize, borderColor: color || defaultColor }} />
  ) : null;
};
