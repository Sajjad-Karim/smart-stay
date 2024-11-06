/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { checkSession } from '@/features/auth/auth.actions';

const SessionWrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);

  return <div>{children}</div>;
};

export default SessionWrapper;
