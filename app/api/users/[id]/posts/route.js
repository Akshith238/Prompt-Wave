import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET=async(req,{params})=>{ //params for dynamic variables
     try {
        await connectToDb();
        const prompts=await Prompt.find({creator:params.id}).populate('creator');
        return new Response(JSON.stringify(prompts),{status:201});
        
     } catch (error) {
        return new Response("Failed to fetch the posts",{status:500});
     }
}