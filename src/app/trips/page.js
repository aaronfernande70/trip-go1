
import Image from "next/image";
import Tile from '../../components/trips/Tile'

export default function Home() {
    const trips = [
        {
            name : "mountain 1" ,
            location: "abc",
            thumbnail: "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
        {
            name : "mountain 2" ,
            location: "abc",
            thumbnail: "https://images.prismic.io/visiticeland/b578b517-8fba-4b4e-a986-21f4ad63fbad_sudurland_hveragerdi001.jpg.JPG?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1946&h=1297",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
        {
            name : "mountain 3" ,
            location: "abc",
            thumbnail: "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
        {
            name : "mountain 4" ,
            location: "abc",
            thumbnail: "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
        {
            name : "mountain 5" ,
            location: "abc",
            thumbnail: "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
    ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-wrap">
        {trips.map((trip)=>{
            return(
                <>
                    <Tile name={trip.name} imageSrc={trip.thumbnail} imageAlt={trip.name} />
                </>
            )
        })}
        
      </section>
    </main>
  );
}
