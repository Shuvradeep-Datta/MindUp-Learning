import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { deleteCategoryById, getAllCategories, updateCategoryById } from '../../services/CategoryService'
import CategoryView from '../../components/CategoryView'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

const AllCategories = () => {

  const [categories,setCategories] = useState([]);
  const [categoryResponse, setCategoryResponse] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [categoryToUpdate,setCategoryToUpdate] =useState(null);
  
  
  

  //First Time Execution
  useEffect(()=>{
    loadAllCategories();
  },[]);

  useEffect(() => {
    if (categoryToUpdate) {
      setValue("title", categoryToUpdate.title);
      setValue("desc", categoryToUpdate.desc);
    }
  }, [categoryToUpdate]);

 const  loadAllCategories=async()=>{
   const categoryResponse=await getAllCategories();
   
   setCategories(categoryResponse.content);
   setCategoryResponse(categoryResponse)
   
   
 }

 const deleteCategory = async(cat)=>{
  //deleteCode
  
  try{
    
    
    const response = await deleteCategoryById(cat.id);
    console.log(categories);
    console.log(cat.id);
    
    const newCategories = categories.filter((item)=> item.id != cat.id);
    setCategories(newCategories);
    
    console.log(response);
     
      
    
  toast.success("Category Deleted Successfully");
  }catch(error){
    toast.error("Some Error Occured...")

  }
  
 }

 function openEditModel(cat){
  setOpenModal(true);
  setCategoryToUpdate(cat)
 }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({mode:"onBlur"})
   const navigation = useNavigate({mode:"onChange"});

   async function onSubmit(){
    try{
      const response =  await updateCategoryById(categoryToUpdate.id,categoryToUpdate);
      console.log(response);
      
      


      const newItems =  categories.map((item)=>{
        if(item.id == categoryToUpdate.id){
          return categoryToUpdate
        }else{
          return item;
        }
       });
       setCategories(newItems);
       setOpenModal(false);

       toast.success("Updated Successfully");

    }catch(error){
      toast.error("Something went Wrong..")
    }
    
   }
function editCategoryModal(){
  return <>
<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Edit Category: <span>{categoryToUpdate?.title}</span></ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Title
          </label>
          <input
          defaultValue={categoryToUpdate?.title}
          {...register("title", {
             required: "Title is required",
             onChange: (e) => {
                          setCategoryToUpdate({
                            ...categoryToUpdate,
                            title: e.target.value,
                          });
                        },
              })}
            type="text"
            id='title'
            name="title"
            placeholder="Enter category title"
            className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
           {errors.title && <span className='text-base px-2 py-2 text-red-500'>{errors.title.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea 
           defaultValue={categoryToUpdate?.desc}
          {...register("desc", {
             required: "Description is required",
               onChange: (e) => {
                        setCategoryToUpdate({
                          ...categoryToUpdate,
                          desc: e.target.value,
                        });
                      },
              })}
            name="desc"
            id='desc'
            rows={3}
            placeholder="Write a brief description"
            className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          ></textarea>
        </div>

        <div className="flex justify-start gap-4">
          <button
          
            type="submit"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md transition"
          >
            Update
          </button>
        
        </div>
      </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
  </>
}




  return (
    <div> 
      <Helmet>
        <title>All Categories</title>
      </Helmet>
    <div className='flex justify-center gap-4'>
      <div>
        <Button as={Link} to={"/admin/addCatergory"}>Add Category</Button>
      {
          categories?.length >0?

        (<h1>All Categories : {categories?.length}</h1>):(<div>No Data Present</div>)
      }
      {/* Show All Categories */}
      
      </div>
      
      
      
    </div>
    {
      categories?.map((cat,item) =>{
        return(

          <CategoryView deleteCategory={deleteCategory} openEditModel={openEditModel} key ={item} cat={cat} />

        )
      })
    }
  {editCategoryModal()}
    </div>
  )
}

export default AllCategories