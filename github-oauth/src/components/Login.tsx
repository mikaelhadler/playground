import { useEffect } from "react";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Input } from "./ui/input";



const Login = () => {
    useEffect(() => {
        if(window.location.href.includes("code")) {
            const code = new URLSearchParams(window.location.search).get("code");
            if (code) {
                fetch("https://github.com/login/oauth/access_token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
                        client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
                        code: code,
                        redirect_uri: window.location.origin,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const accessToken = data.access_token;
                        // Use the access token as needed
                        console.log("Access Token:", accessToken);
                    })
                    .catch((error) => {
                        console.error("Error retrieving access token:", error);
                    });
            }
            
            console.log("Code:", code);
        }
    }, [window.location.href]);

    const handleGithubOauth = () => {
        console.log('import.meta.env.VITE_GITHUB_CLIENT_ID', import.meta.env.VITE_GITHUB_CLIENT_ID);
        console.log('import.meta.env.VITE_GITHUB_CLIENT_SECRET', import.meta.env.VITE_GITHUB_CLIENT_SECRET);
        
        // window.location.href = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}`;
    }
  return (
    <div className="flex flex-col gap-3 w-[350px] mx-auto">
      <h1 className="text-2xl font-bold">Create an account</h1>
      <h2 className="text-slate-500 text-sm mb-2">
        Enter your email below to create your account
      </h2>

      <Input placeholder="name@example.com" />
      <Button type="button" className="text-sm font-normal">
        Sign In with Email
      </Button>
      <div className="uppercase text-xs text-slate-500 my-2">
        or continue with
      </div>
      <Button variant={"outline"} className="font-normal"
        onClick={handleGithubOauth}>
        {Icons.gitHub({
          style: {
            width: 16,
            height: 16,
            marginRight: 8,
          },
        })}
        Github
      </Button>
    </div>
  );
};

export default Login;
