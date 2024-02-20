"use client"
import { useCurrentUser } from "@/hooks/use-current-user";
import {signOut } from "next-auth/react";

const settingsPage =  () => {
  const user= useCurrentUser();
  const onClick = () => {
    signOut();
  }
  return (
    <>
      <div>Settings Page</div>
    
      <div className="bg-white p-10 rounded-xl">
        <button onClick={onClick} type="submit">Sign Out</button>
      </div>
    </>
  );
};

export default settingsPage;
