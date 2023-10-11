import { useState } from "react";
import { createUsr } from "../services/loginRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [usrInput, setUsrInput] = useState({
    username: "",
    name: "",
    password: "",
  });

  const notify = () => toast.success("User Created! Proceed to Log In");

  const handleFormChange = (e) => {
    let myObj = {};
    myObj[e.target.name] = e.target.value;
    setUsrInput({ ...usrInput, ...myObj });
  };

  const handleCreateUsr = () => {
    createUsr(usrInput).then((res) => {
      console.log("User Created!!", res);
    });
    setUsrInput({ username: "", name: "", password: "" });
    navigate("/login");
    notify();
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
                  <h3 className="mb-5">Sign Up</h3>
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
                      type="text"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      onChange={handleFormChange}
                      name="name"
                      value={usrInput.name}
                    />
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Name
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
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleCreateUsr}
                  >
                    Register
                  </button>
                  <br />
                  Already have an account?<a href="/login">login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
