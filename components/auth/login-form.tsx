import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
    return (
<CardWrapper
headerLabel="Welcome back"
backButtonHref="/auth/register"
backButtonLabel="Don't have an account?"
showSocial
>
    Login form
</CardWrapper>
    )
}

export default LoginForm;