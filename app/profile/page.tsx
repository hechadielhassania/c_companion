import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className=" bg-gray-100 p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/profile-picture.jpg"
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                <p className="text-gray-600">Software Engineer</p>
              </div>
            </div>
            <div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <p className="bg-gray-100 rounded-md p-2">John Doe</p>
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <p className="bg-gray-100 rounded-md p-2">john.doe@example.com</p>
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <p className="bg-gray-100 rounded-md p-2">(123) 456-7890</p>
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <p className="bg-gray-100 rounded-md p-2">New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
