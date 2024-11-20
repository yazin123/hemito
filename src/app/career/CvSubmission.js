import { useState } from 'react';
import { FaUpload, FaSpinner } from 'react-icons/fa';

const CVSubmissionSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    cv: null
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [fileName, setFileName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setStatus({
          type: 'error',
          message: 'File size should not exceed 5MB'
        });
        return;
      }
      setFormData(prev => ({ ...prev, cv: file }));
      setFileName(file.name);
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('role', formData.role);
    formPayload.append('cv', formData.cv);

    try {
      const response = await fetch('process.env.NEXT_PUBLIC_BACKEND_URLcareer/submit-cv', {
        method: 'POST',
        body: formPayload
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'CV submitted successfully! We\'ll notify you about relevant opportunities.'
        });
        setFormData({ name: '', email: '', role: '', cv: null });
        setFileName('');
      } else {
        throw new Error(data.message || 'Failed to submit CV');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Submit Your CV for Future Opportunities
          </h2>
          <p className="text-lg text-gray-600">
            Stay ahead of opportunities! Submit your CV now and we'll notify you when relevant positions open up.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {status.message && (
            <div className={`mb-6 p-4 rounded-lg ${
              status.type === 'error' 
                ? 'bg-red-50 text-red-900 border border-red-200' 
                : 'bg-green-50 text-green-900 border border-green-200'
            }`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label 
                htmlFor="role" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                required
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="e.g., Software Engineer, Product Manager"
              />
            </div>

            <div>
              <label 
                htmlFor="cv" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload CV
              </label>
              <div className="mt-1">
                <label className="flex justify-center px-6 py-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-gray-400 transition-colors">
                  <div className="text-center">
                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-2 flex text-sm text-gray-600">
                      <span className="relative cursor-pointer font-medium text-blue-600 hover:text-blue-500 transition-colors">
                        {fileName ? fileName : 'Upload a file'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">PDF or DOC up to 5MB</p>
                  </div>
                  <input
                    id="cv"
                    name="cv"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg text-white text-sm font-medium ${
                loading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 transition-colors'
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                'Submit CV'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CVSubmissionSection;