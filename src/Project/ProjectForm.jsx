import { useState } from 'react';
import { PlusCircle, ImagePlus } from 'lucide-react';

const ProjectForm = ({ onSubmit, project = {} }) => {
  const [name, setName] = useState(project.name || '');
  const [description, setDescription] = useState(project.description || '');
  const [image, setImage] = useState(project.image || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, image });
    setName('');
    setDescription('');
    setImage(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white border border-gray-200 p-6 rounded-lg shadow-lg"
    >
      {/* Project Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">📌 Project Name</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="e.g. Task Management App"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">📝 Description</label>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Short description about the project..."
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">📷 Project Thumbnail</label>

        <div className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 hover:border-indigo-500 transition duration-200 group">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center text-gray-500 group-hover:text-indigo-500">
            <ImagePlus size={28} className="mb-2" />
            <p className="text-sm font-medium">Click to upload an image</p>
            <p className="text-xs text-gray-400">JPG, PNG, GIF — Max 5MB</p>
          </div>
        </div>

        {image && (
          <div className="mt-4 rounded overflow-hidden border shadow-md">
            <img
              src={image}
              alt="Project Preview"
              className="h-48 w-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-md transition duration-200"
      >
        <PlusCircle size={18} />
        Create Project
      </button>
    </form>
  );
};

export default ProjectForm;
