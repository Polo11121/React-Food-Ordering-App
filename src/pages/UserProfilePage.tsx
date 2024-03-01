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

  if (isLoading || !isFetchedAfterMount) {
    return <UserProfileSkeleton />;
  }

  if (!myUser) {
    return <span>Unable to load user profile. Please try again later.</span>;
  }

  return (
    <UserProfileForm
      onSubmit={mutateAsync}
      isLoading={isPending || isRefetching}
      user={myUser}
    />
  );
};
