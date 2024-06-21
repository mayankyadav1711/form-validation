import React,{useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Modal from "react-modal";
Modal.setAppElement('#root');
const Formik_Yup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      age: "",
      website: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
      date: "",
      color: "",
      bio: "",
      linkedin: '',
      github: '',
      instagram: '',
      twitter: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
      age: Yup.number()
        .min(1, "Must be at least 1")
        .max(100, "Must be less than 100")
        .required("Required"),
      website: Yup.string().url("Invalid URL").required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .required("Required"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      zip: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, "Must be exactly 6 digits")
        .max(6, "Must be exactly 6 digits")
        .required("Required"),
      date: Yup.date().required("Required"),
      color: Yup.string().required("Required"),
      bio: Yup.string()
        .min(20, "Must be at least 20 characters")
        .required("Required"),
        linkedin: Yup.string()
        .matches(
          /^https?:\/\/(www\.)?linkedin\.com\/.*$/,
          'Enter a valid LinkedIn URL'
        )
        .required('Required'),
      github: Yup.string()
        .matches(
          /^https?:\/\/(www\.)?github\.com\/.*$/,
          'Enter a valid GitHub URL'
        )
        .required('Required'),
      instagram: Yup.string()
        .matches(
          /^https?:\/\/(www\.)?instagram\.com\/.*$/,
          'Enter a valid Instagram URL'
        )
        .required('Required'),
      twitter: Yup.string()
        .matches(
          /^https?:\/\/(www\.)?twitter\.com\/.*$/,
          'Enter a valid Twitter URL'
        )
        .required('Required')
    }),
    onSubmit: (values) => {
      toast.success('Form submitted successfully')
      setFormData(values);
      setModalIsOpen(true);
      console.log(values)
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Formik + Yup</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.username}
              </div>
            ) : null}
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          {/* Age */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.age && formik.errors.age ? "border-red-500" : ""
              }`}
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.age}
              </div>
            ) : null}
          </div>

          {/* Website */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="website"
            >
              Website
            </label>
            <input
              id="website"
              name="website"
              type="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.website}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.website && formik.errors.website
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.website && formik.errors.website ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.website}
              </div>
            ) : null}
          </div>

          {/* Phone */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.address && formik.errors.address
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.address}
              </div>
            ) : null}
          </div>

          {/* City */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.city && formik.errors.city
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.city}
              </div>
            ) : null}
          </div>

          {/* ZIP Code */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="zip"
            >
              ZIP Code
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zip}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.zip && formik.errors.zip ? "border-red-500" : ""
              }`}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.zip}
              </div>
            ) : null}
          </div>

          {/* Date */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.date && formik.errors.date
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.date}
              </div>
            ) : null}
          </div>

          {/* Color */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="color"
            >
              Favorite Color
            </label>
            <input
              id="color"
              name="color"
              type="color"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.color}
              className="w-16 h-10"
            />
            {formik.touched.color && formik.errors.color ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.color}
              </div>
            ) : null}
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bio}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.bio && formik.errors.bio ? "border-red-500" : ""
              }`}
            />
            {formik.touched.bio && formik.errors.bio ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.bio}
              </div>
            ) : null}
          </div>
           {/* LinkedIn URL */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">LinkedIn URL</label>
    <input
      id="linkedin"
      name="linkedin"
      type="url"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.linkedin}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        formik.touched.linkedin && formik.errors.linkedin ? 'border-red-500' : ''
      }`}
    />
    {formik.touched.linkedin && formik.errors.linkedin ? (
      <div className="text-red-500 text-xs mt-1">{formik.errors.linkedin}</div>
    ) : null}
  </div>

  {/* GitHub URL */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">GitHub URL</label>
    <input
      id="github"
      name="github"
      type="url"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.github}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        formik.touched.github && formik.errors.github ? 'border-red-500' : ''
      }`}
    />
    {formik.touched.github && formik.errors.github ? (
      <div className="text-red-500 text-xs mt-1">{formik.errors.github}</div>
    ) : null}
  </div>

  {/* Instagram URL */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagram">Instagram URL</label>
    <input
      id="instagram"
      name="instagram"
      type="url"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.instagram}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        formik.touched.instagram && formik.errors.instagram ? 'border-red-500' : ''
      }`}
    />
    {formik.touched.instagram && formik.errors.instagram ? (
      <div className="text-red-500 text-xs mt-1">{formik.errors.instagram}</div>
    ) : null}
  </div>

  {/* Twitter URL */}
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">Twitter URL</label>
    <input
      id="twitter"
      name="twitter"
      type="url"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.twitter}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        formik.touched.twitter && formik.errors.twitter ? 'border-red-500' : ''
      }`}
    />
    {formik.touched.twitter && formik.errors.twitter ? (
      <div className="text-red-500 text-xs mt-1">{formik.errors.twitter}</div>
    ) : null}
  </div>

        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Form Data"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-inner">
          {JSON.stringify(formData, null, 2)}
        </pre>
        <button
          onClick={() => setModalIsOpen(false)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Formik_Yup;
