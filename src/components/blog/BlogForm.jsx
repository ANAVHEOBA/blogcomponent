import { useState } from 'react';

const BlogForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({ title: '', content: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Post Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Post Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus:border-orange-500"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
      >
        {initialData ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default BlogForm;