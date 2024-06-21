import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from "react-hot-toast";
import Modal from "react-modal";
Modal.setAppElement('#root');
const schema = z.object({
  username: z.string().min(3, 'Must be at least 3 characters').nonempty('Required'),
  email: z.string().email('Invalid email address').nonempty('Required'),
  password: z.string().min(6, 'Must be at least 6 characters').nonempty('Required'),
  age: z.number().min(1, 'Must be at least 1').max(100, 'Must be less than 100'),
  website: z.string().url('Invalid URL').nonempty('Required'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Must be exactly 10 digits').nonempty('Required'),
  address: z.string().nonempty('Required'),
  city: z.string().nonempty('Required'),
  zip: z.string().regex(/^[0-9]{6}$/, 'Must be exactly 6 digits').nonempty('Required'),
  date: z.string().nonempty('Required'),
  color: z.string().nonempty('Required'),
  bio: z.string().min(20, 'Must be at least 20 characters').nonempty('Required'),
  linkedin: z.string().regex(/^https?:\/\/(www\.)?linkedin\.com\/.*$/, 'Enter a valid LinkedIn URL').nonempty('Required'),
  github: z.string().regex(/^https?:\/\/(www\.)?github\.com\/.*$/, 'Enter a valid GitHub URL').nonempty('Required'),
  instagram: z.string().regex(/^https?:\/\/(www\.)?instagram\.com\/.*$/, 'Enter a valid Instagram URL').nonempty('Required'),
  twitter: z.string().regex(/^https?:\/\/(www\.)?twitter\.com\/.*$/, 'Enter a valid Twitter URL').nonempty('Required')
});

const ReactHookForm_Zod = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    toast.success('Form submitted successfully')
    setFormData(data);
    setModalIsOpen(true);
    console.log(data)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">React Hook Form + Zod</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              {...register('username')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.username && errors.username ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.username && errors.username && (
              <div className="text-red-500 text-xs mt-1">{errors.username.message}</div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              {...register('email')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.email && errors.email ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.email && errors.email && (
              <div className="text-red-500 text-xs mt-1">{errors.email.message}</div>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              {...register('password')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.password && errors.password ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.password && errors.password && (
              <div className="text-red-500 text-xs mt-1">{errors.password.message}</div>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              {...register('age', { valueAsNumber: true })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.age && errors.age ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.age && errors.age && (
              <div className="text-red-500 text-xs mt-1">{errors.age.message}</div>
            )}
          </div>

          {/* Website */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="url"
              {...register('website')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.website && errors.website ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.website && errors.website && (
              <div className="text-red-500 text-xs mt-1">{errors.website.message}</div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              {...register('phone')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.phone && errors.phone ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.phone && errors.phone && (
              <div className="text-red-500 text-xs mt-1">{errors.phone.message}</div>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              {...register('address')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.address && errors.address ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.address && errors.address && (
              <div className="text-red-500 text-xs mt-1">{errors.address.message}</div>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              {...register('city')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.city && errors.city ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.city && errors.city && (
              <div className="text-red-500 text-xs mt-1">{errors.city.message}</div>
            )}
          </div>

          {/* ZIP Code */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">ZIP Code</label>
            <input
              id="zip"
              name="zip"
              type="text"
              {...register('zip')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.zip && errors.zip ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.zip && errors.zip && (
              <div className="text-red-500 text-xs mt-1">{errors.zip.message}</div>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              {...register('date')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.date && errors.date ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.date && errors.date && (
              <div className="text-red-500 text-xs mt-1">{errors.date.message}</div>
            )}
          </div>

          {/* Color */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">Favorite Color</label>
            <input
              id="color"
              name="color"
              type="color"
              {...register('color')}
              className="w-16 h-10"
            />
            {touchedFields.color && errors.color && (
              <div className="text-red-500 text-xs mt-1">{errors.color.message}</div>
            )}
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              {...register('bio')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.bio && errors.bio ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.bio && errors.bio && (
              <div className="text-red-500 text-xs mt-1">{errors.bio.message}</div>
            )}
          </div>

          {/* LinkedIn URL */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">LinkedIn URL</label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              {...register('linkedin')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.linkedin && errors.linkedin ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.linkedin && errors.linkedin && (
              <div className="text-red-500 text-xs mt-1">{errors.linkedin.message}</div>
            )}
          </div>

          {/* GitHub URL */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">GitHub URL</label>
            <input
              id="github"
              name="github"
              type="url"
              {...register('github')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.github && errors.github ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.github && errors.github && (
              <div className="text-red-500 text-xs mt-1">{errors.github.message}</div>
            )}
          </div>

          {/* Instagram URL */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagram">Instagram URL</label>
            <input
              id="instagram"
              name="instagram"
              type="url"
              {...register('instagram')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.instagram && errors.instagram ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.instagram && errors.instagram && (
              <div className="text-red-500 text-xs mt-1">{errors.instagram.message}</div>
            )}
          </div>

          {/* Twitter URL */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">Twitter URL</label>
            <input
              id="twitter"
              name="twitter"
              type="url"
              {...register('twitter')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                touchedFields.twitter && errors.twitter ? 'border-red-500' : ''
              }`}
            />
            {touchedFields.twitter && errors.twitter && (
              <div className="text-red-500 text-xs mt-1">{errors.twitter.message}</div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default ReactHookForm_Zod;
