import React, { useContext } from "react";
import { ContactContext } from "./ContactContext";

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-indigo-700">
            {contact.name}
          </h2>
          <p className="text-gray-600 mt-1">📞 {contact.phone}</p>
          <p className="text-gray-600">✉️ {contact.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
