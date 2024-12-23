import { useState, FormEvent } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const UpdateAccountPassword = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleUpdatePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validasi password baru dan konfirmasi password
    if (newPassword !== confirmPassword) {
      setMessage('Password baru dan konfirmasi password tidak cocok');
      return;
    }

    // Validasi panjang password minimal
    if (newPassword.length < 6) {
      setMessage('Password baru harus minimal 6 karakter');
      return;
    }

    try {
      setLoading(true);

      // Update password
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;
      
      setMessage('Password berhasil diperbarui!');
      
      // Reset form
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
      // Redirect ke halaman profil setelah 2 detik
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
      
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Ubah Password
          </h2>
          
          <form onSubmit={handleUpdatePassword} className="space-y-6">
            {/* Password Lama */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password Lama
              </label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Password Baru */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password Baru
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                minLength={6}
              />
            </div>

            {/* Konfirmasi Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Konfirmasi Password Baru
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                minLength={6}
              />
            </div>

            {/* Pesan Error/Sukses */}
            {message && (
              <div className={`text-sm text-center ${
                message.includes('berhasil') ? 'text-green-600' : 'text-red-600'
              }`}>
                {message}
              </div>
            )}

            {/* Tombol Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? 'Memperbarui...' : 'Update Password'}
              </button>
            </div>
          </form>
          
          {/* Tombol Kembali */}
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate(-1)}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccountPassword;
