/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useCallback, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import DatePicker from 'tailwind-react-datepicker'
// import { ExclamationIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddUser(props) {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const form = useRef(null);
  const { setUserList, dialog, handleDialog, userDataEdit, req, setReq } = props;
  // const initial = {
  //   firstName: "has",
  //   lastName: "has",
  //   email: "has",
  //   address: "hasn",
  //   mobileNumber: 0,
  //   password: "22",
  //   retypePass: "22",
  //   status: "active",
  //   order: 0

  // }
  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobileNumber: 0,
    password: "",
    retypePass: "",
    status: "",
    order: 0

  }
  const [userData, setUserData] = new useState(initial);


  const inputHandle = (e) => {

    const { name, value } = e.target;
    setUserData((preVal) => {
      // console.log(e.target.type);
      // const history = {
      //     ...preVal,
      //     [name]: value
      // };
      // console.log(history);
      return {
        ...preVal,

        [name]: value,
      }

    });


  }
  //  props.handleDialog(setOpen);
  const handleSubmit = useCallback(() => {
    if(req.req === "post"){
      axios.post('http://localhost:3001/users', userData).then(
      res => {

        axios.get('http://localhost:3001/users').then(res => {
          setUserList(res.data);
          // form.current.reset();   
          setUserData(initial);
        });

        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });


      }).catch(
        (error) => {
          console.log(error);
        });
    }else if(req.req === 'put'){
      axios.put(`http://localhost:3001/users/user/${req.id}`, userData).then(
       
      res => {
 
        axios.get('http://localhost:3001/users').then(res => {
          setUserList(res.data);
          // form.current.reset();   
          // setUserData(initial);
        });

        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });


      }).catch(
        (error) => {
          console.log(userData);
          console.log(req.id);
          console.log(error);
        });
    }
    


  }, [userData, setUserList, setUserData])

  // handleDialog = () =>{
  //   setOpen(true);
  // }
  const handleOpen = () => {
    setOpen(false);
    handleDialog(false);
    setReq({
      req :'post',
      id : 0
    });

    // console.log('handleopen');
    // setUserData(inital);
  }

  useEffect(() => {
    setOpen(dialog);
    console.log('from use effect' + dialog);
    return ()=>{
      setUserData(initial);
    }
  }, [dialog,userDataEdit])





  useEffect(() => {

    
      setUserData(
        {
          'firstName': userDataEdit.firstName,
          'lastName': userDataEdit.lastName,
          'email': userDataEdit.email,
          'address': userDataEdit.address,
          'mobileNumber': userDataEdit.mobileNumber,
          'password': userDataEdit.password,
          'retypePass': userDataEdit.retypePass,
          'status': userDataEdit.status,
          'order': userDataEdit.order
  
        }
  
      );
      
   
 }, [userDataEdit])


  return (
    <>
      <div className='bg-white shadow-md rounded mt-20 py-6 px-4 flex justify-between'>

        <div class="relative w-2/5">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        </div>
        <button onClick={() => handleDialog(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add User
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-end min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all min-h-screen  sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div> */}
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                          Deactivate account
                        </Dialog.Title>
                        <div className="mt-2">
                          <form ref={form} className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                  First Name
                                </label>
                                <input name='firstName' onChange={inputHandle} value={(userData.firstName) ? userData.firstName : ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                              </div>
                              <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                  Last Name
                                </label>
                                <input name='lastName' onChange={inputHandle} value={(userData.lastName) ? userData.lastName : ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                              </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                  Email
                                </label>
                                <input name='email' onChange={inputHandle} value={(userData.email) ? userData.email : ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="example@gmail.com" />
                                <p className="text-gray-600 text-xs italic">Enter your email address</p>
                              </div>

                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
                                  Address
                                </label>
                                <input name='address' onChange={inputHandle} value={(userData.address) ? userData.address : ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder="Enter your home address" />
                                <p className="text-gray-600 text-xs italic">Enter flat, house number, road number</p>
                              </div>

                            </div>
                            {/* <div className="relative"> */}
                            {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
</div> */}
                            {/* <DatePicker /> */}

                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                                  Phone
                                </label>
                                <input name='mobileNumber' onChange={inputHandle} value={(userData.mobileNumber) ? userData.mobileNumber : ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="number" placeholder="Enter your mobile number" />
                                <p className="text-gray-600 text-xs italic">example: 01739339367</p>
                              </div>

                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-status">
                                  Status
                                </label>
                                <div className="relative  mb-3">
                                  <select name='status' onChange={inputHandle} value={(userData.status) ? userData.status : ''} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-status">
                                    <option>active</option>
                                    <option>inactive</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                  </div>
                                </div>
                                <p className="text-gray-600 text-xs italic">select active or inactive</p>
                              </div>
                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-order">
                                  Order
                                </label>
                                <input name='order' onChange={inputHandle} value={(userData.order) ? userData.order : ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-order" type="number" placeholder="" />
                                <p className="text-gray-600 text-xs italic">place your number of order</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                  Password
                                </label>
                                <input name='password' onChange={inputHandle} value={(userData.password) ? userData.password : ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                                <p className="text-gray-600 text-xs italic">Enter your password</p>
                              </div>
                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-retype-password">
                                  Retype Password
                                </label>
                                <input name='retypePass' onChange={inputHandle} value={(userData.retypePass) ? userData.retypePass : ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-retype-password" type="password" placeholder="******************" />
                                <p className="text-gray-600 text-xs italic">Retype your password</p>
                              </div>
                            </div>
                            {/* <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                City
                              </label>
                              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                State
                              </label>
                              <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                  <option>New Mexico</option>
                                  <option>Missouri</option>
                                  <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                              </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                              </label>
                              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                            </div>
                          </div> */}
                          </form>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleOpen}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleSubmit}
                      ref={cancelButtonRef}
                    >
                      { (req.req === 'post') ? 'Submit' : 'Update'}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
