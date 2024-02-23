import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import { UserProfileForm, UserProfileSkeleton } from "@/components/forms";

export const UserProfilePage = () => {
  const {
    data: myUser,
    isLoading,
    isFetchedAfterMount,
    isRefetching,
  } = useGetMyUser();
  const { mutate: updateMyUser, isPending } = useUpdateMyUser();

  if (isLoading || !isFetchedAfterMount) {
    return <UserProfileSkeleton />;
  }

  if (!myUser) {
    return <span>Unable to load user profile. Please try again later.</span>;
  }

  return (
    <UserProfileForm
      onSubmit={updateMyUser}
      isLoading={isPending || isRefetching}
      user={myUser}
    />
  );
};
