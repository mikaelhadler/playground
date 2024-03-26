import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Input } from "./ui/input";

const Login = () => {
    const handleGithubOauth = () => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}`;
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
