import { FunctionComponent } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import SignInForm from "../components/signinform";

const Login: FunctionComponent = ({}) => {
  const { data: session } = useSession();

  // Sign out
  if (session) {
    return (
      <>
        <div className="flex min-h-full flex-col justify-center bg-slate-100 py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Signed in as {session?.user?.email}
            </h2>
            <div className="my-3 text-center">
              <button
                className="rounded bg-red-600 py-2 px-4 font-bold text-white hover:bg-red-700"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <SignInForm />;
};

export default Login;
