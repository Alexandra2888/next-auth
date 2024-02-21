import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ServerPage = async () => {
    const user = await useCurrentUser();
    return (
        <div>
            <UserInfo label="Server component" user={user}/>
        </div>
    )
};

export default ServerPage;