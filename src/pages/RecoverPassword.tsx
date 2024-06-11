export const RecoverPassword: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Recover your password
        </h2>
        <form action="">
            <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />


            </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword
