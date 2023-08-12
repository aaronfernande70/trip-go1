
import Tile from '../../components/trips/Tile'

export default function Home() {
    const trips = [
        {
            name : "mountain 1" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: "adventure",
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 1" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: "adventure",
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        {
            name : "mountain 1" ,
            location: "abc",
            thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmountains&psig=AOvVaw2U8fs34ScvMVRG8nz8K-yL&ust=1691506326827000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9y6TmyoADFQAAAAAdAAAAABAE",
            category: "adventure",
            description: "The beautiful Hvalfjörður, with its winding roads and pristine hiking paths, is being rediscovered by travelers and developers alike."
        },
        
    ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <section className="flex flex-wrap gap-5">
        {trips.map((trip)=>{
            return(
                <>
                    <Tile name={trip.name} imageSrc={trip.thumbnail} imageAlt={trip.name} description={trip.description} category={trip.category}/>
                </>
            )
        })}
        
      </section>
    </main>
  );
}
