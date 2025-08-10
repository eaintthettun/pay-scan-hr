export default function StaffPage() {
  const staff = [
    { id: 1, name: "John Doe", role: "STAFF" },
    { id: 2, name: "Jane Smith", role: "STAFF" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Staff</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">ID</th>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => (
              <tr key={s.id}>
                <td className="border-b p-2">{s.id}</td>
                <td className="border-b p-2">{s.name}</td>
                <td className="border-b p-2">{s.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add New Staff
      </button>
    </div>
  );
}
