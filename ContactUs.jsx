import React from 'react';

function ContactForm() {
  return (
    <div className="bg-neutral-200 min-h-screen flex flex-col justify-center font-sans">
      <div className="px-6 md:px-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-700 font-semibold text-xl mb-23">
          Reach us out if you need any assistant or having a trouble with anything
        </p>
      </div>

      <div className="bg-white rounded-[30px] shadow-lg p-6 md:p-8 max-w-2xl w-full self-center">
        <form>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 px-3 py-2 bg-gray-100 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-0 block w-full rounded-lg sm:text-sm"
                placeholder="Type an Answer"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 px-3 py-2 bg-gray-100 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-0 block w-full rounded-lg sm:text-sm"
                placeholder="Type an Answer"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 px-3 py-2 bg-gray-100 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-0 block w-full rounded-lg sm:text-sm"
              placeholder="Type an Answer"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="issue" className="block text-sm font-medium text-gray-700">
              Issues with the app
            </label>
            <input
              type="text"
              id="issue"
              name="issue"
              className="mt-1 px-3 py-2 bg-gray-100 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-0 block w-full rounded-lg sm:text-sm"
              placeholder="Type an Answer"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="7"
              className="mt-1 px-3 py-2 bg-gray-100 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-0 block w-full rounded-lg sm:text-sm"
              placeholder="Type an Answer"
            ></textarea>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-md text-sm font-medium text-white bg-sky-500 focus:outline-none"
            >
              Send request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
