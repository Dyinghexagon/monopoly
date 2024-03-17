using System.Security.Cryptography;
using System.Text;

namespace monopoly.Server.Utils
{
    public class CryptoUtils
    {
        private static readonly int _keySize = 64;
        private static readonly int _iterations = 350000;
        private static readonly HashAlgorithmName _hashAlgorithm = HashAlgorithmName.SHA512;

        public static string HashPasword(string password, out byte[] salt)
        {
            salt = RandomNumberGenerator.GetBytes(_keySize);
            var hash = Rfc2898DeriveBytes.Pbkdf2(
                 Encoding.UTF8.GetBytes(password),
                 salt,
                 _iterations,
                 _hashAlgorithm,
                 _keySize);

            return Convert.ToHexString(hash);
        }

        public static bool VerifyPassword(string password, string hash, byte[] salt)
        {
            var hashToCompare = Rfc2898DeriveBytes.Pbkdf2(password, salt, _iterations, _hashAlgorithm, _keySize);
            return CryptographicOperations.FixedTimeEquals(hashToCompare, Convert.FromHexString(hash));
        }
    }
}
