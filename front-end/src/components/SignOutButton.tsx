import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Sign out", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({
        message: error.message,
        type: "ERROR",
      });
    },
  });
  const onClick = () => {
    mutation.mutate();
  };
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 font-bold text-white rounded hover:text-blue-600 hover:bg-gray-100"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
