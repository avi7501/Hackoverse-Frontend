import React from 'react'

const CreateEvents = () => {
  return (
    <div className='overflow-y-scroll w-full'><p className='w-full flex justify-center items-center text-3xl mt-2'>Create Events</p>
    <form class="w-full h-full flex flex-col">
<div className='w-full'><label className='text-2xl p-2'>Title</label><input type='text' name="title" id='title'/></div>
<div className='w-full'><label className='text-2xl p-2'>Description</label><input type='text' name="title" id='title'/></div>
</form>
    </div>
  )
}

export default CreateEvents