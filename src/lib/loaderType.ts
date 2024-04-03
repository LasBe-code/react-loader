export type LoaderSizeType = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type LoaderPropsType = {
  isLoading?: boolean;
  size?: LoaderSizeType;
  color?: string;
};

export type LoaderDefaultStyle = {
  size?: LoaderSizeType;
  color?: string;
};
