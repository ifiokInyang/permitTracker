import { useLocation } from 'react-router-dom';

export const usePath = () => {
  const locattion = useLocation();
  const arryPath = locattion.pathname.split('/');
  const current = arryPath[arryPath.length - 1];
  return current;
};
