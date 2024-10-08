


function FullBlogSkelleton() {
  return (

        // <div role="status" className="max-w-sm animate-pulse">
    //     <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
    //     <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
    //     <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    //     <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
    //     <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
    //     <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
    //     <span className="sr-only">Loading...</span>
    // </div>
       <div role="status" className="animate-pulse">
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    </div>
                    <div className="text-slate-500 pt-2">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    </div>
                    <div className="pt-4 m-1">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                    </div>
                    <div className="text-5xl font-extrabold">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    </div>
                    <div className="text-slate-500 pt-2">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    </div>
                    <div className="pt-4">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default FullBlogSkelleton