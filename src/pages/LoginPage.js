import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import SignInSide from '../components/SignInSide';
import { getSelectorLoading } from '../redux/auth/auth-selectors';

function LoginPage() {
  const isLoading = useSelector(getSelectorLoading);

  return (
    <>
      <SignInSide />
      {isLoading && <Loader />}
    </>
  );
}

export default LoginPage;
