"use client"
import React, { useState, useEffect } from 'react';

const CvPage = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [userData, setUserData] = useState({
    name: 'John Doe',
    address: '123 Main St, Anytown, USA',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    // Add more fields as necessary
  });

  useEffect(() => {
    const fetchTemplate = async () => {
      try{
        const res = await fetch('/api/template');
      const data = await res.json();
      setHtmlContent(data.html);
      }catch(err){
        console.log("err in fetching", err)
      }
  
    };

    fetchTemplate();
  }, []);

  const replacePlaceholders = (html) => {
    let replacedHtml = html;
    for (const [key, value] of Object.entries(userData)) {
      const placeholder = `{{${key}}}`;
      replacedHtml = replacedHtml.replace(new RegExp(placeholder, 'g'), value);
    }
    return replacedHtml;
  };

  return (
    <div>
      <h1>Create Your CV</h1>
      <form>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={(e) => setUserData({ ...userData, address: e.target.value })}
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="tel"
          name="phone"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        {/* Add more input fields as necessary */}
      </form>
      <div
        dangerouslySetInnerHTML={{ __html: replacePlaceholders(htmlContent) }}
      />
    </div>
  );
};

export default CvPage;
