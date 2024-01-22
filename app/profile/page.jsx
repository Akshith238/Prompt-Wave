"use client"
import { useState,useEffect} from "react"
import { useSession } from "next-auth/react"
import Profile from "@components/Profile"

const MyProfile = () => {
    const {data:session}=useSession();
    const [posts,setPosts]  = useState([]);

    const handleEdit=()=>{
          
    }
    const handleDelete=async()=>{

    }
    
    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        setPosts(data);
    
      };
    useEffect(() => {fetchPosts()}, []);
    
    
  return (
    <Profile
        name="My"
        desc="Welcome to your personalised profile page"
        data={posts}
        handleEdit={handleEdit}
        handledelete={handleDelete}
    />
  )
}

export default MyProfile