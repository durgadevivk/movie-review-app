import { useEffect, useState } from "react"

type StarRatingProps = {
  imdbID: string;
};
 const StarRating=({ imdbID }: StarRatingProps)=>{
    const [rating,setRating]=useState(0)
    //load saved rating
    useEffect(()=>{
        const savedRating=localStorage.getItem(`rating-${imdbID}`)
         if (savedRating) {
      setRating(Number(savedRating));
    }
    },[imdbID]);
    useEffect(()=>{
        localStorage.setItem(`rating-${imdbID}`, rating.toString());
    },[rating, imdbID])
    return(
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Your Rating</h2>
            <div className="flex gap-2">
                {
                    [1,2,3,4,5].map((star)=>(
                        <button key={star}
                        onClick={()=>setRating(star)}
                        className={`text-4xl transition-colors ${star <=rating?"text-yellow-400" : "text-gray-300"}`
                        }
                        
                        >★</button>
                    ))
                }
                 </div>
                  <p className="mt-3 text-lg">You rated this movie: {rating}/5</p>
        </div>
    )
}
export default StarRating