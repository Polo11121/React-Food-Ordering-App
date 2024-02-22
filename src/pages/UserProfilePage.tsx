import { useUpdateMyUser } from "@/api/MyUserApi";
import { UserProfileForm } from "@/components/forms";

export const UserProfilePage = () => {
  const { mutate: updateMyUser, isPending } = useUpdateMyUser();

  return (
    <div>
      <UserProfileForm onSubmit={updateMyUser} isLoading={isPending} />
    </div>
  );
};
