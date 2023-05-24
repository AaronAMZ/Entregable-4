import { useForm } from "react-hook-form";
import "./UserForm.css"

const UserForm = ({onClose, onSend, initialData}) => {
    const { register, handleSubmit,} = useForm({defaultValues: initialData});

    const onSubmit = (data) => {
        if(initialData) onSend({id: initialData.id, ...data});
        else onSend(data);
    }
  return (
    <form className='user-form' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='user-form_title'>{initialData ? 'Edit User' : 'Nuevo Usuario'}</h2>

        <button type='button' className='user-form_close-btn' onClick={() => onClose()}>X</button>

        <div className='user-form_inputs'>
        <div className='user-form_input-container'>
          <label htmlFor="nameId" className='user-form_label'>
            First Name

          </label>
            <input type="text" placeholder='Name' id='nameId' {...register("first_name")} />
        </div>

        <div className='user-form_input-container'>
          <label htmlFor="lastNameId" className='user-form_label'>
            Last Name
            
          </label>
            <input type="text" placeholder='Last Name' id='lastNameId' {...register("last_name")}/>
        </div>

        <div className='user-form_input-container'>
          <label htmlFor="emailId" className='user-form_label'>
            Email
            
          </label>
            <input type="email" placeholder='example@email.com' id='emailId' {...register("email")}/>
        </div>

        <div className='user-form_input-container'>
          <label htmlFor="passwordId" className='user-form_label'>
            Password
            
          </label>
            <input type="password" placeholder='*****' id='passwordId' {...register("password")}/>
        </div>

        <div className='user-form_input-container'>
          <label htmlFor="birthdayId" className='user-form_label'>
            Birthday
            
          </label>
            <input type="date" id='birthdayId' {...register("birthday")}/>
        </div>

        </div>

        <button type='submit' className='user-form_submit'>{initialData ? 'Save changes' : 'Add new user'}</button>
      </form>
  )
}

export default UserForm