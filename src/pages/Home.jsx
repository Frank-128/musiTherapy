import { Star, Verified } from "@mui/icons-material";
import React, { useEffect, useMemo,useState } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars, lorelei, micah } from "@dicebear/collection";
import { artists, therapies } from "../assets/data";

function Home() {
    const [seed,setSeed]= useState(Math.random()*100);
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 128,
      seed:seed
    }).toDataUriSync();
  }, [seed]);

const myCustomAvatar = (numbers)=>{
    return createAvatar(micah, {
        size: 128,
        seed:numbers
      }).toDataUriSync();
}

  return (
    <div className="flex">
      <div className="basis-1/2 m-3 bg-green-700 p-4">
        <span className="font-bold text-lg">Popular Artists</span>
        {artists.map((item,i) => (
          <div key={i} className="flex text-2xl my-2 items-center gap-3">
            <img
              src={item.pic}
              className="w-24 h-24 object-cover rounded-full"
              alt="..."
            />
            <div>
              <p className="font-bold">
                {item.name}{" "}
                <Verified
                  style={
                    item.status === "gold"
                      ? { color: "gold" }
                      : item.status === "Platnum"
                      ? { color: "diamond" }
                      : { color: "cyan" }
                  }
                />
              </p>
              <p className="text-sm">Song: {item.song}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="basis-1/2 m-3 bg-orange-700 p-4">
        Hottest Therapies
        {therapies.map((item,i)=> <div key={i} className="flex items-center">
          <img src={myCustomAvatar(Math.random()*1000)} alt="..." />
          <div className="flex flex-col bg-gradient-to-r from-orange-950 to-amber-700 p-3 rounded">
           <p> {item.lyric}</p>
           <div className="flex justify-between">
            <span> {Array(item.rating).fill().map((_,i)=><Star key={i} style={{color:'gold'}} />)}</span>
            <span>by, {item.name}</span>
           </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default Home;
