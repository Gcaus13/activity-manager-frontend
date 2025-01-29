import { Button, TextField } from "@mui/material";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router";

const Login = () => {
  const { username, password, setValue } = useAuthStore();
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen p-36">
        <div className="w-full h-full rounded-[95px] flex">
          <div className="bg-cyan-700 rounded-l-[95px] w-1/4 h-full"></div>
          <div className="bg-cyan-50 rounded-r-[95px] w-2/3 h-full p-20">
            <div className="w-full h-full flex flex-col gap-y-36">
              <h1 className="text-4xl font-bold text-black flex items-center justify-center">
                Login
              </h1>
              <div className="w-full flex flex-col items-center justify-center gap-5">
                <TextField
                  className="w-1/3"
                  id="login-username"
                  label="Usuário"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setValue("username", e.target.value)}
                />
                <TextField
                  className="w-1/3"
                  id="login-password"
                  label="Senha"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setValue("password", e.target.value)}
                />
                <Button
                  className="w-1/5"
                  variant="contained"
                  onClick={() => {
                    console.log(username, password);
                    navigate("/dashboard");
                  }}
                >
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
