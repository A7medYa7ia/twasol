import Header from "../components/Header";

export default function AddJob() {
  return (
    <div>
      <Header />
      <body className="flex justify-center">
        <div className="w-4/6 flex flex-col p-4 m-4 rounded-xl bg-white  items-center   ">
          <h1 className=" text-center font-bold text-4xl">Add Job</h1>

          <form className="w-5/6 mt-2">
            <div className="mb-2">
              <label className="block font-bold" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                className="w-full p-8 h-5 rounded-xl border-2"
                type="text"
                id="jobTitle"
                name="jobTitle"
                required
              />
            </div>
            <div className="form-group">
              <label className="block font-bold" htmlFor="salary">
                Salary
              </label>
              <input
                className="w-full p-8 h-5 rounded-xl border-2"
                type="text"
                id="salary"
                name="salary"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block font-bold" htmlFor="jobDescription">
                Job Description
              </label>
              <textarea
                className="w-full p-2 rounded-xl border-2"
                id="jobDescription"
                name="jobDescription"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              className="p-2 bg-orange-900 rounded-2xl text-zinc-100"
              type="submit"
            >
              Publish
            </button>
          </form>
        </div>
      </body>
    </div>
  );
}
