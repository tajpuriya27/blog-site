import { useState } from "react";
import { loginUsr } from "../services/loginRequest";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [usrInput, setUsrInput] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const notify = (uName) => toast.success(`${uName} Logged In`);

  const handleFormChange = (e) => {
    let myObj = {};
    myObj[e.target.name] = e.target.value;
    setUsrInput({ ...usrInput, ...myObj });
  };

  const handleLogin = () => {
    loginUsr(usrInput).then((res) => {
      dispatch(setUser(res));
      notify(res.username);
    });
    setUsrInput({ username: "", password: "" });
    navigate("/");
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Log in</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      onChange={handleFormChange}
                      name="username"
                      value={usrInput.username}
                    />
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Username
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      onChange={handleFormChange}
                      name="password"
                      value={usrInput.password}
                    />
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <br />
                  Have no account? <a href="/register">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
