
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { EMAIL_MIN_LENGTH, PASSWORD_MIN_LENGTH } from "src/constants/validationConstants";
import { loginUser } from "src/redux/auth/auth.operations";
import * as Yup from "yup";





const schema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .min(EMAIL_MIN_LENGTH, "Email must be at least 3 characters")
    .email("Must be a valid email"),
    
  password: Yup.string()
    .required("Phone is required")
    .min(PASSWORD_MIN_LENGTH, "Password must be at least 7 characters"),
});

const Login = () => {
  const dispatch = useDispatch()
  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues: {
      email:"",
      password: "",
    },
    onSubmit: (values) => {
      dispatch<any>(loginUser(values))
    },
    validationSchema: schema,
  });
  
  console.log('errors: ', errors);
  // const getInputClassName = errors.name ? "invalid" : "valid";
  // const getInputClassNumber = errors.phone ? "invalid" : "valid";

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="email"
        name="email"
        value={values.email}
        // pattern= "^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Email must be a valid email"
        required
        placeholder="Email@gmail.com"
        // className={getInputClassName}
        style={{ color: errors.email ? "red" : "green" }}
      />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <input
        onChange={handleChange}
        type="password"
        name="password"
        value={values.password}
        title="Password must be at least 7 characters"
        // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        placeholder="********"
        required
        // className={getInputClassNumber}
        style={{ color: errors.password ? "red" : "green" }}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
