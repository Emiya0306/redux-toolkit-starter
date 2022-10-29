import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  children: undefined,
};

export default React.memo(Layout);
