import { useGetMyUser, useUpdateMyUser } from "@/api/myUserApi";
import { UserProfileForm, UserProfileSkeleton } from "@/components/forms";

export const UserProfilePage = () => {
  const {
    data: myUser,
    isLoading,
    isFetchedAfterMount,
    isRefetching,
  } = useGetMyUser();
  const { mutateAsync, isPending } = useUpdateMyUser();

  if (isLoading || !isFetchedAfterMount || !myUser) {
    return <UserProfileSkeleton />;
  }

  return (
    <UserProfileForm
      onSubmit={mutateAsync}
      isLoading={isPending || isRefetching}
      user={myUser}
    />
  );
};
