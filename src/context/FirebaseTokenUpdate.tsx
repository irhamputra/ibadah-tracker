import { useAuthUser } from "@react-query-firebase/auth";
import { useRouter } from "next/router";
import * as React from "react";

import { auth } from "@/config/firebase";

const FirebaseTokenUpdate: React.FC = () => {
  const { replace } = useRouter();
  const { data, isLoading } = useAuthUser(["user"], auth);

  React.useEffect(() => {
    if (data) {
      replace("/dashboard");
    } else {
      replace("/");
    }
  }, [data, replace]);

  if (isLoading) {
    return <div />;
  }

  return null;
};

export default FirebaseTokenUpdate;
