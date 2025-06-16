import React, { useState, useContext, useEffect, createContext } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ContactProvider } from "./components/ContactContext";

const ContactCardApp = () => {
  useEffect(() => {
    document.title = "Contact Card App";
  }, []);

  return (
    <ContactProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10 drop-shadow-md">
            📇 Contact Card App
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 bg-white p-6 rounded-2xl shadow-xl">
              <ContactForm />
            </div>
            <div className="flex-1">
              <ContactList />
            </div>
          </div>
        </div>
      </div>
    </ContactProvider>
  );
};

export default ContactCardApp;
