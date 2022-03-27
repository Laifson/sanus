import {useLocation} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context/AuthProvider";

export default function GithubRedirect() {

    const {loginWithGithub} = useContext(AuthContext)
    const queryParameter = new URLSearchParams(useLocation().search)
    const code = queryParameter.get("code")

    useEffect(() => {
        loginWithGithub(code)
        //eslint-disable-next-line
    }, [code])

    return (
        <p>Logging in...</p>
    )
}