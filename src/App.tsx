import { BiDotsVerticalRounded } from "react-icons/bi";
import avatarImage from "./assets/avatar.jpg";
import { useState } from "react";
import EmployeeModal from "./components/EmployeeModal ";

interface EmployeeData {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  hireDate?: Date | "";
  salary?: number | "";
  department?: string;
  image?: string;
}

const initialEmployeeData: EmployeeData[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "4",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "5",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "6",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "7",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "8",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "9",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "10",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "11",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "12",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "13",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "14",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "15",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "16",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "17",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
  {
    id: "18",
    firstName: "John",
    lastName: "Doe",
    email: "Sincere@april.biz",
    phone: "123-456-7890",
    hireDate: new Date(),
    salary: 100000,
    department: "Sales",
    image: avatarImage,
  },
];

function App() {
  const [isOptionOpenArray, setIsOptionOpenArray] = useState(
    Array(initialEmployeeData.length).fill(false)
  );
  const [employeeData, setEmployeeData] = useState<EmployeeData[]>(initialEmployeeData)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOptions = (index: number) => {
    const newOptionState = [...isOptionOpenArray];
    newOptionState[index] = !newOptionState[index];
    setIsOptionOpenArray(newOptionState);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteEmployee = (index: number) => {
    const updatedEmployeeData = [...employeeData];
    updatedEmployeeData.splice(index, 1);
    setEmployeeData(updatedEmployeeData);
    toggleOptions(index)
  };


  return (
    <>
      <div className="container mx-auto">
        <button
          onClick={openModal}
          className="bg-blue-700 hover:bg-blue-500 font-bold text-white px-4 py-2 m-2 rounded-md"
        >
          Add Employee
        </button>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {employeeData.map((employee: EmployeeData, index: number) => (
            <div
              key={index}
              className="border relative rounded-xl flex flex-col cursor-pointer"
              draggable
            >
              <div
                className="flex justify-end p-3"
                onClick={() => toggleOptions(index)}
              >
                <BiDotsVerticalRounded />
              </div>
              {isOptionOpenArray[index] && (
                <div className={`absolute right-8 top-2`}>
                  <ul className="border rounded-xl flex flex-col">
                    <li className="hover:bg-gray-300 px-6 py-1 rounded-tr-xl rounded-tl-xl">
                      update
                    </li>
                    <li onClick={() => deleteEmployee(index)} className="hover:bg-gray-300 px-6 py-1 rounded-br-xl rounded-bl-xl">
                      delete
                    </li>
                  </ul>
                </div>
              )}
              <div className="flex flex-col items-center justify-center flex-grow">
                <img
                  src={employee.image}
                  alt=""
                  className="rounded-full h-24 mb-4"
                />
                <h2>
                 {employee.id}. {employee.firstName} {employee.lastName}
                </h2>
                <p>{employee.email}</p>
              </div>

              <div className="bg-gray-400 p-1 py-2 rounded-b-xl text-center font-bold">
                <p>{employee.department}</p>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && <EmployeeModal onCloseModal={closeModal} />}
      </div>
    </>
  );
}

export default App;
