"use client";
import Link from "next/link";
import {MainBadge} from "@/components/Typo/Typo"
import Development from "@/components/Development/Development";
export default function Service() {
  return (
    <div style={{ marginTop: "100px" ,textAlign:"center"}}>
       <MainBadge text="Developer language"/>
      <div>
          {/* <MainBadge text="Developer language"/> */}
        {/* <h1>Service Page</h1> */}
        <div>
            <Development
                  title="Technologies and Tools"
              images={[
                 "/images/java.svg",
                 "/images/react.svg",
                 "/images/Angular.svg",
                 "/images/net.svg",
                 "/images/node.svg",
                 "/images/laravel.svg",
                 "/images/codel.svg"
       
              ]}
              />
        </div>
        <div style={{marginTop:120}}>
           <MainBadge text="Here are the Answers"/>
        </div>
      </div>
 
    </div>
 
  );
}