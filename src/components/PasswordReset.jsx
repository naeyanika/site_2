import { useState } from 'react';
import { supabase } from '../supabaseClient'; // Pastikan ini sesuai dengan path Anda

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) throw error;
      
      setMessage('Silakan cek email Anda untuk link reset password');
      setEmail('');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Mengirim...' : 'Reset Password'}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-sm">
          {message}
        </p>
      )}
    </div>
  );
};

export default PasswordReset;
