import { useState } from "react";

export type StudentInformation = {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  country: string;
  age: string;
};

type Props = {
  onContinue: (student: StudentInformation) => void;
};

export default function StudentInformationForm({ onContinue }: Props) {
  const [student, setStudent] = useState<StudentInformation>({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    country: "",
    age: "",
  });

  function updateField(
    field: keyof StudentInformation,
    value: string
  ) {
    setStudent((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !student.fullName ||
      !student.email ||
      !student.phone
    ) {
      alert("Please complete all required fields.");
      return;
    }

    onContinue(student);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-5"
    >
      <h2 className="text-3xl font-bold">
        Student Information
      </h2>

      <p className="text-gray-500">
        Please complete your details before starting
        the placement test.
      </p>

      <input
        required
        className="w-full border rounded-xl p-3"
        placeholder="Full Name *"
        value={student.fullName}
        onChange={(e) =>
          updateField("fullName", e.target.value)
        }
      />

      <input
        required
        className="w-full border rounded-xl p-3"
        placeholder="Email Address *"
        type="email"
        value={student.email}
        onChange={(e) =>
          updateField("email", e.target.value)
        }
      />

      <input
        required
        className="w-full border rounded-xl p-3"
        placeholder="Phone Number *"
        value={student.phone}
        onChange={(e) =>
          updateField("phone", e.target.value)
        }
      />

      <input
        className="w-full border rounded-xl p-3"
        placeholder="Nationality"
        value={student.nationality}
        onChange={(e) =>
          updateField("nationality", e.target.value)
        }
      />

      <input
        className="w-full border rounded-xl p-3"
        placeholder="Country"
        value={student.country}
        onChange={(e) =>
          updateField("country", e.target.value)
        }
      />

      <input
        className="w-full border rounded-xl p-3"
        placeholder="Age"
        value={student.age}
        onChange={(e) =>
          updateField("age", e.target.value)
        }
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-700 text-white py-4 hover:bg-blue-800 transition"
      >
        Continue to Test →
      </button>
    </form>
  );
}
