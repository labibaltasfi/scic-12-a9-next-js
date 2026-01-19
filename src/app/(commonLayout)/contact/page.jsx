import React from 'react';

const page = () => {
    return (
       <section
  id="Contact"
  className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors"
>
  <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-10">

    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
        Get In Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        I’d love to hear from you. Please fill out the form below.
      </p>
    </div>

    {/* Form */}
    <form className="space-y-6">

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
           
            placeholder="First name"
            required
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            required
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          name="email"
        
          placeholder="you@example.com"
          required
          className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">
          Message
        </label>
        <textarea
          rows="5"
          name="message"
          placeholder="Write your message..."
          required
          className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489] resize-none"
        />
      </div>

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="privacy"
          className="mt-1 w-5 h-5 text-[#192489] focus:ring-[#192489]"
          required
        />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          You agree to our friendly privacy policy.
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-[#192489] text-white font-semibold hover:bg-[#141d6f] transition"
      >
        Send Message
      </button>

    </form>
  </div>
</section>

    );
};

export default page;