import Header from '../header/header'
import UserPage from '../../page/user.jsx';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../info/info';


function User() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData(id);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const navId = id === '18' ? '12' : '18';

  return (
    <>
      <Header props={navId} />
      <UserPage userData={userData} />
    </>
  );
}

export default User;
