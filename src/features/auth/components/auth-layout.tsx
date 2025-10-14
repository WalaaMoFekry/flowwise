import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-svh bg-muted items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex flex-col w-full max-w-sm gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src="/logo.svg" alt="Flowwise logo" width={30} height={30} />
          Flowwise
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
