import React from "react";
import CodeSnippet from "./CodeSnippet";

const CodeSnippets = () => {
  // Code snippets for Formik/Yup and React Hook Form/Zod
  const formikYupCode = `
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: ""
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters")
});

const onSubmit = (values) => {
  console.log(values);
};

const FormikYupForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form className="space-y-4">
        <div>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" />
          {errors.username && touched.username && <div>{errors.username}</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          {errors.email && touched.email && <div>{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);
`;

  const reactHookFormZodCode = `
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username can't exceed 20 characters").regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores").optional(),
  email: z.string().email("Invalid email address").required("Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters").required("Password is required")
});

const ReactHookFormZodForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" {...register("username")} />
        {errors.username && <div>{errors.username.message}</div>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
`;

return (
  <div className="w-full max-w-6xl bg-white p-4 md:p-8 rounded-lg shadow-lg mt-8 md:mt-16">
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
      Code Snippets for Formik/Yup and React Hook Form/Zod
    </h2>
    <div className="flex flex-col md:flex-row justify-around w-full max-w-6xl mb-8 md:mb-16 space-y-8 md:space-y-0 md:space-x-8">
      {/* Formik/Yup Code Snippet */}
      <div className="bg-sky-100 p-4 md:p-8 rounded-lg shadow-lg w-full md:w-1/2 overflow-auto">
        <CodeSnippet title="Formik & Yup Example" code={formikYupCode} language="jsx" />
      </div>

      {/* React Hook Form/Zod Code Snippet */}
      <div className="bg-rose-100 p-4 md:p-8 rounded-lg shadow-lg w-full md:w-1/2 overflow-auto">
        <CodeSnippet title="React Hook Form & Zod Example" code={reactHookFormZodCode} language="jsx" />
      </div>
    </div>
  </div>
);
};

export default CodeSnippets;
