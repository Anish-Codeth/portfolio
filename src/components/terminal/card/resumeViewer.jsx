import React from 'react';

const ResumeViewer = ({ showFunction }) => {
    return (
        <div className="fixed inset-0  z-40 flex justify-center items-center mt-3">
   <div className="backface backdrop-blur-sm fixed inset-0 h-full w-full "></div>
   <div className='z-50 h-full w-full   flex flex-col items-center'>
    <iframe className='h-[90%] w-[80%] allowfullscreen' src="Resume.pdf" frameborder="0" title='Resume'>
    </iframe>
    <div className='text-white z-50  mt-4 bg-blue-500 border-gray-500 rounded-md p-2 hover:cursor-pointer hover:bg-slate-400' onClick={()=>showFunction(false)} >
        Close
    </div>
    </div>
    </div>

    );
}

export default ResumeViewer;
