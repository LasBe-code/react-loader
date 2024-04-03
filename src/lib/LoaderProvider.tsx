import { createContext, useContext } from 'react';
import { LoaderDefaultStyle } from './loaderType';

const defaultValues: LoaderDefaultStyle = {
  size: 'md',
  color: '#000',
};

const LoaderDefaultStyleContext = createContext<LoaderDefaultStyle>(defaultValues);

/**
 * Loader의 기본 스타일을 설정할 수 있는 Provider
 * @example
 * <LoaderProvider defaultStyle={{ size: 'lg', color: 'red' }}>
 *  <App />
 * </LoaderProvider>
 */
export const LoaderProvider = ({ children, defaultStyle }: { children: React.ReactNode; defaultStyle?: LoaderDefaultStyle }) => {
  const providerValue = { ...defaultValues, ...defaultStyle };
  return <LoaderDefaultStyleContext.Provider value={providerValue}>{children}</LoaderDefaultStyleContext.Provider>;
};

export const useLoaderDefaultStyle = () => useContext(LoaderDefaultStyleContext);
