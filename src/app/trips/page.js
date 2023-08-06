"use client";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

export default function Home() {
    const trips = [
        {
            name : "mountain" ,
            location: "abc",
            thumbnail: "https://images.prismic.io/visiticeland/b578b517-8fba-4b4e-a986-21f4ad63fbad_sudurland_hveragerdi001.jpg.JPG?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1946&h=1297",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
        {
            name : "mountain" ,
            location: "abc",
            thumbnail: "https://images.prismic.io/visiticeland/b578b517-8fba-4b4e-a986-21f4ad63fbad_sudurland_hveragerdi001.jpg.JPG?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1946&h=1297",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
        {
            name : "mountain" ,
            location: "abc",
            thumbnail: "https://images.prismic.io/visiticeland/b578b517-8fba-4b4e-a986-21f4ad63fbad_sudurland_hveragerdi001.jpg.JPG?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1946&h=1297",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
        {
            name : "mountain" ,
            location: "abc",
            thumbnail: "https://images.prismic.io/visiticeland/b578b517-8fba-4b4e-a986-21f4ad63fbad_sudurland_hveragerdi001.jpg.JPG?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1946&h=1297",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
        {
            name : "mountain" ,
            location: "abc",
            thumbnail: "https://images.prismic.io/visiticeland/b578b517-8fba-4b4e-a986-21f4ad63fbad_sudurland_hveragerdi001.jpg.JPG?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1946&h=1297",
            description: "abc abc abc lor abc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lorabc abc abc lor"
        },
    ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        {trips.map(()=>{
            return(
                <>
                    
                </>
            )
        })}
        
      </section>
    </main>
  );
}
