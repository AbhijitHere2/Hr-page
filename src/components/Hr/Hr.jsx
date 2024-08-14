import hrbanner from "../images/hrbanner.svg";

const Hr = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        <div className=" relative h-auto ">
          <img src={hrbanner} alt="Human Resource Workshops" className="  " />
          <div className="absolute inset-0  bg-gradient-to-r to-transparent from-[#481e65]  flex items-center justify-start ">
            <div className="ml-10 text-white w-[50%]  max-md:ml-5 max-md:w-full text-wrap">
              <h2
                className="text-3xl 
              max-md:text-2xl max-sm:text-xl font-bold"
              >
                Human Resource Workshops
              </h2>
              <p
                className="mt-4 text-lg 
              max-md:text-base text-wrap max-sm:text-sm"
              >
                This workshop focuses on the latest trends and best practices in
                human resource management, including talent acquisition,
                employee engagement, and performance management.
              </p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-center ">
            Explore <span className="text-[#4A3AFF]"> My Offerings</span> for
            you
          </h3>
          <p className="mt-2 text-center text-gray-600 ">
            Discover tailored solutions infused with cutting-edge <br />
            innovation and expertise.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4  rounded-md border-2 text-center">
              <div className="flex justify-center mb-4">
                <span className="inline-block p-2 bg-blue-100 text-blue-600 rounded-full">
                  <i class="fa-solid fa-chalkboard-user"></i>
                </span>
              </div>
              <h4 className="font-semibold text-lg">Interactive Sessions</h4>
              <p className="mt-2 text-gray-600">
                Engage with hands-on activities, Q&A, and networking
                discussions.
              </p>
            </div>
            <div className="p-4  rounded-md border-2 text-center">
              <div className="flex justify-center mb-4">
                <span className="inline-block p-2 bg-blue-100 text-blue-600 rounded-full">
                  <i class="fa-regular fa-handshake"></i>
                </span>
              </div>
              <h4 className="font-semibold text-lg">Expert Mentors</h4>
              <p className="mt-2 text-gray-600">
                Invite industry experts to share their knowledge and
                experiences.
              </p>
            </div>
            <div className="p-4  rounded-md border-2 text-center">
              <div className="flex justify-center mb-4">
                <span className="inline-block p-2 bg-blue-100 text-blue-600 rounded-full">
                  <i class="fa-solid fa-book-open-reader"></i>
                </span>
              </div>
              <h4 className="font-semibold text-lg">Resource Sharing</h4>
              <p className="mt-2 text-gray-600">
                Engage with hands-on activities, Q&A, and networking
                discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hr;
