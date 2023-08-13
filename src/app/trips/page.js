
import Tile from '../../components/trips/Tile'
import Filter from '../../components/trips/Filter'
import Title from '../../Typography/Title';

export default function Home() {
    const trips = [
        {
            name : "mountain 1" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 2" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure", "city"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 3" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure", "waterfalls"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 1" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 2" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure", "city"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 3" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure", "waterfalls"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 1" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 2" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure", "city"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 3" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: ["adventure", "waterfalls"],
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        
    ]
  return (
    <main className="bg-white text-black ">
      <div className='pt-5'>
        
          <Title primitive={"h1"} className="text-6xl px-12 md:px-24 font-semibold">Trips</Title>
          <div className='border-b-2 border-b-gray-200 px-12 md:px-24'>
            <Filter/>
          </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-around pt-6 bg-gray-100 px-12 md:px-24" > 
        {trips.map((trip)=>{
            return(
                <>
                    <Tile name={trip.name} imageSrc={trip.thumbnail} imageAlt={trip.name} description={trip.description} category={trip.category}/>
                </>
            )
        })}
        
      </div>
    </main>
  );
}
