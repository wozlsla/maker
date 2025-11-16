import { ProfileCard } from "~/features/users/components/profile-card";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <h1>Home</h1>
      <ProfileCard />
    </div>
  );
}
