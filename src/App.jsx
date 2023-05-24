import { useEffect, useState } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import UserList from './Components/UserList/UserList';
import Modal from './Components/Modal/Modal';

import {useForm} from 'react-hook-form'
import UserForm from './Components/UserForm/UserForm';
import { getAllUsers } from './services/getAllUser';
import { createUser } from './services/createUser';
import { updateUSer } from './services/updateUser';
import { deleteUser } from './services/deleteUser';


function App() {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);
  const [deletedUser, setDeletedUser] = useState(null)

  const loadUsers = async () => {
    const usersData = await getAllUsers();
    setUsers(usersData);
  };

  const handleCloseModal = () => {
    setEditingUserData(null);
    setIsVisibleModal(false);
  }

  const handleCreate = () => {
    setIsVisibleModal(true);
  };

  const handleSend = async (data) => {
    if(data.id) await updateUSer(data.id, data);
    else await createUser(data);
    await loadUsers();
    setIsVisibleModal(false);
  };

  const handleEditUser = (dataUser) => {
    setIsVisibleModal(true);
    setEditingUserData(dataUser)
  };

  const handleOnDelete = async(id) => {
    const option = confirm("¿Está seguro que desea eliminar este usuario?")
    option
    await deleteUser(id);
    await loadUsers();
  }

  useEffect(() => {
    
    loadUsers();
  }, []);
  return (
    <article className='section'>
     <Header onCreate={handleCreate}/>
     <UserList users={users} onEditUser={handleEditUser} onDelete={handleOnDelete}/>
     <Modal isVisible={isVisibleModal}>
      <UserForm 
      onClose={handleCloseModal}
      onSend={handleSend} 
      onDelete={deletedUser} 
      initialData={editingUserData}/>
     </Modal>
    </article>
  )
}

export default App
