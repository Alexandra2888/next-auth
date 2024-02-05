import {auth, signOut } from "@/auth";

const settingsPage = async () => {
  const session = await auth();
  return (
    <>
      <div>Settings Page</div>
      <div>{JSON.stringify(session)}</div>
      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button type="submit">Sign Out</button>
      </form>
    </>
  );
};

export default settingsPage;
