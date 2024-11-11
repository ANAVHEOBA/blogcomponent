import Blog from '../components/blog';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>
        {/*add other profile components here boss */}
        <Blog />
      </div>
    </div>
  );
};

export default Profile;