"use client"
import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname,useRouter } from "next/navigation"

const PromptCard = ({post,handleTagclick,handleEdit,handleDelete}) => {
  const pathName=usePathname();
  const router=useRouter();
  const {data:session}=useSession();
  const [copied, setCopied] = useState("");

  const handleCopy=()=>{
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>setCopied(""),3000);
  }

  return (
    <div className="prompt_card">
       <div className="flex justify-between items-start gap-5">
           <div>
              <Image src={post.creator.image}
              width={40} 
              height={40}
              alt="creator-image"
              className="rounded-full object-contain"
              />
           </div>
           <div className="flex flex-col">
              <h5 className="dont-satoshi font-semibold text-gray-900">
                {post.creator.username}
              </h5>
              <p className="font-inter text-sm text-gray-500">
                {post.creator.email}
              </p>
           </div>
           <div className="copy_btn" onClick={()=>{handleCopy()}}>
                <Image 
                   src={post.prompt === copied? '/assets/icons/tick.svg':'/assets/icons/copy.svg'}
                   width={12}
                   height={12}
                />
           </div>
       </div>
       <p className="my-2 text-sm font-satoshi text-gray-700">
           {post.prompt}
       </p>
       <p className="my-2 font-inter text-sm blue_gradient cursor-pointer"
       onClick={()=>handleTagclick && handleTagclick(post.tag)}
       >
          {post.tag}
       </p>
       {session?.user.id === post.creator._id && pathName === "/profile" && (
            <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
              <p className="font-inter text-sm green_gradient cursor-pointer"
               onClick={handleEdit}
              >
                  Edit
              </p>
              <p className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}
              >
                  Delete
              </p>
            </div>
       )}
    </div>
  )
}

export default PromptCard