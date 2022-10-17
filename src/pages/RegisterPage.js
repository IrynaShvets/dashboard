import { useSelector } from 'react-redux';
import SignUp from '../components/SignUp';
import Loader from '../components/Loader';
import { getSelectorLoading } from '../redux/auth/auth-selectors';

const RegisterPage = () => {
  const isLoading = useSelector(getSelectorLoading);

  return (
    <>
      <SignUp />
      {isLoading && <Loader />}
    </>
  );
};

export default RegisterPage;
