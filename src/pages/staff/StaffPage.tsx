import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Link } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  role: string;
  qrCodeId: string;
  salaryAmount: number;
  email: string;
}

export default function StaffPage() {
  const [staff, setStaff] = useState<Employee[]>([]);

  useEffect(() => {
    console.log("hello useEffect");
    fetch("http://localhost:4000/employees")
      .then((res) => res.json())
      .then((data) => setStaff(data))
      .catch((err) => console.error("Error fetching staff:", err));
  }, []);
  {
    console.log("staff is:", staff);
  }
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center mt-10 font-sans text-slate-900">
        <h1 className="text-2xl font-bold mb-10">All Staff</h1>
      </div>

      {staff.length === 0 ? (
        <p>No staff records found..</p>
      ) : (
        <Table striped>
          <TableHead>
            <TableHeadCell className="bg-slate-300 text-center">
              ID
            </TableHeadCell>
            <TableHeadCell className="bg-slate-300 text-center">
              Name
            </TableHeadCell>
            <TableHeadCell className="bg-slate-300 text-center">
              Role
            </TableHeadCell>
            <TableHeadCell className="bg-slate-300 text-center">
              Qr Code Id
            </TableHeadCell>
            <TableHeadCell className="bg-slate-300 text-center">
              Salary Amount
            </TableHeadCell>
            <TableHeadCell className="bg-slate-300 text-center">
              Email
            </TableHeadCell>
            <TableHeadCell className="bg-slate-300 text-center">
              Actions
            </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {staff.map((s) => (
              <TableRow
                key={s.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="text-center text-slate-800">
                  {s.id}
                </TableCell>
                <TableCell className="text-center text-slate-800">
                  {s.name}
                </TableCell>
                <TableCell className="text-center text-slate-800">
                  {s.role}
                </TableCell>
                <TableCell className="text-center text-slate-800">
                  {s.qrCodeId}
                </TableCell>
                <TableCell className="text-center text-slate-800">
                  {s.salaryAmount} ks.
                </TableCell>
                <TableCell className="text-center text-slate-800">
                  {s.email}
                </TableCell>
                <TableCell className="flex justify-center gap-3">
                  <Link
                    to="/staff/view/:id"
                    className="px-4 py-2 text-amber-600 font-semibold"
                  >
                    View
                  </Link>
                  <Link
                    to="/staff/edit/:id"
                    className="px-4 py-2 text-amber-600 font-semibold"
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <div className="flex justify-center mt-4">
        <Link
          to="/staff/add"
          className="px-4 py-2 bg-slate-600 text-white rounded"
        >
          Add New Staff
        </Link>
      </div>
    </div>
  );
}
