import { ChangeEvent, FormEvent, useState, MouseEvent, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

interface EmployeeModalProps {
  onCloseModal: (i: boolean) => void;
}
const EmployeeModal = ({ onCloseModal }: EmployeeModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    salary: "",
    department: "",
    hireDate: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onCloseModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContainerClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCloseModal(false);
    }
  };
  return (
    <div
      onClick={handleContainerClick}
      className="fixed bg-black inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center overflow-auto"
    >
      <div className="w-4/6 mx-auto mt-10 bg-white rounded-md p-4 ">
        <div className="flex justify-end ">
          <RxCross2
            className="cursor-pointer"
            onClick={() => onCloseModal(false)}
          />
        </div>
        <h1 className="text-center font-bold">Add Employee</h1>
        <form className="flex flex-col gap-4 p-6 " onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                name="firstName"
                className="border border-gray-400 rounded-md py-3 px-3 w-full"
                placeholder="firstName"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="lastName">Lastname</label>
              <input
                type="text"
                name="lastName"
                className="border border-gray-400 rounded-md py-3 px-3 w-full"
                placeholder="lastName"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="border border-gray-400 rounded-md py-3 px-3 w-full"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="phone">Tel</label>
              <input
                type="tel"
                name="phone"
                className="border border-gray-400 rounded-md py-3 px-3 w-full"
                placeholder="Phone number"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                name="salary"
                className="border border-gray-400 rounded-md py-3 px-3 w-full"
                placeholder="Salary"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                name="department"
                className="border border-gray-400 rounded-md py-3 px-3 w-full"
                placeholder="Department"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <label className="mb-[-14px]" htmlFor="hireDate">
            Hire Date
          </label>
          <input
            type="date"
            name="hireDate"
            className="border border-gray-400 rounded-md py-3 px-3 w-full"
            onChange={handleInputChange}
          />

          <div className="flex items-center space-x-2">
            <label className="border border-blue-600 hover:border-blue-400 text-blue-600 hover:text-blue-400 font-bold px-4 py-2 rounded-lg cursor-pointer">
              Upload File
              <input
                type="file"
                className="hidden"
                onChange={handleFileSelection}
              />
            </label>
            {selectedFile && (
              <label htmlFor="imageName" className="text-gray-600">
                {selectedFile.name}
              </label>
            )}
          </div>

          <button className="bg-green-600 hover:bg-green-400 rounded-md py-2 font-bold text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
