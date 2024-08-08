import React, { useState, useContext } from 'react';

import Modal from './elements/Modal';
import SelectDropdown from './elements/Select';

import { useForm, Controller } from 'react-hook-form';
import { AppContext } from '../utils/appContext';

import { job_exp, job_type } from '../utils/data';
import { getJobDescription } from '../utils/helper';

const JDForm = () => {
  const { setView, setJobDesc, isDarkMode } = useContext(AppContext);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const key = process.env.REACT_APP_OPEN_API_KEY;

  const handleJD = handleSubmit(async (data) => {
    setLoading(true);

    const prompt = `Generate a detailed job description for a ${data.jobTitle} with ${data.jobExp.value} years of experience, working ${data.jobType.value}. your responses as proper markdowns and presented this way:
    - Job Title (contains experience level based on the years provided, determine if it's a junior, intermediate or senior, do not add remote or hybrid or onsite on job title. You do not need to add the word 'Job title', just write the title of the job given as the heading)
    - Job Description (make it brief)
    - Key Responsibilities (presented as a list)
    - Qualifications
    - What We Offer
    `;

    const { response, error } = await getJobDescription(prompt, key);

    if (error) {
      alert(error);
      setLoading(false);
    } else if (response) {
      setJobDesc(response);
      setView('result');
      setLoading(false);
    } else {
      setLoading(false);
      alert('Something went wrong. Please try again');
    }
  });

  return (
    <Modal onClose={() => setView('')}>
      <form onSubmit={handleJD}>
        <div>
          <label className="text-sm text-black dark:text-white">
            Job title
          </label>
          <input
            className="mt-2 w-full bg-transparent text-black dark:text-white py-3 !px-5 text-base border border-black dark:border-gray-600 rounded-lg focus:outline-0 focus:border-blue-400"
            type="text"
            placeholder="Frontend developer (Reactjs/Nextjs)"
            {...register('jobTitle', {
              required: true,
            })}
          />
          {errors.jobTitle ? (
            <p className="text-red-500 text-xs">Job title is required</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-10">
          <div>
            <label className="text-sm text-black dark:text-white">
              Experience
            </label>

            <Controller
              control={control}
              name="jobExp"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <SelectDropdown
                  options={job_exp}
                  dark={isDarkMode}
                  {...field}
                />
              )}
            />

            {errors.jobExp ? (
              <p className="text-red-500 text-xs">Select years of experience</p>
            ) : null}
          </div>

          <div>
            <label className="text-sm text-black dark:text-white">
              Work Location type
            </label>
            <Controller
              control={control}
              name="jobType"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <SelectDropdown
                  options={job_type}
                  dark={isDarkMode}
                  {...field}
                />
              )}
            />

            {errors.jobType ? (
              <p className="text-red-500 text-xs">Select work location type</p>
            ) : null}
          </div>
        </div>

        <div>
          <button
            disabled={loading}
            className=" bg-[#272727] dark:bg-white text-white dark:text-black rounded-lg w-full py-3 text-base font-medium"
          >
            {loading ? 'Generating..' : 'Generate JD'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default JDForm;
