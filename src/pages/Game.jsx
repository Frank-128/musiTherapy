import React, { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import { Cancel, Done, Score } from "@mui/icons-material";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

import axios from "axios";
import { geniousConfig } from "../assets/geniousConfig";
import { playerController } from "../context/PlayerContext";
import { getAuth } from "firebase/auth";
import { app, db } from "../firebase";
import { Firestore, addDoc, collection } from "firebase/firestore";
function Game() {
  const [lyrics, setLyrics] = useState("");
  const [artist, setArtist] = useState("");
  const [score, setScore] = useState([]);
  const [respo, setRespo] = useState([]);
  const [gameTimer, setGameTimer] = useState(20);
  const [isRunning, setIsRunning] = useState(true);
  const { player, setPlayer } = playerController();
  const auth = getAuth(app);

  const myCustomAvatar = (numbers) => {
    return createAvatar(avataaars, {
      size: 128,
      seed: numbers,
    }).toDataUriSync();
  };
  const failure = (value) => {
    return Swal.fire({
      title: "Ooops!!",
      text: value,
      icon: "error",
      confirmButtonText: "Cool",
      timer: 3500,
    });
  };
  const success = (value) => {
    return Swal.fire({
      title: "Congrats!!",
      text: value,
      icon: "success",
      confirmButtonText: "Cool",
      timer: 3000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var tempArr = lyrics.split(" ");
    if (tempArr.length < 5) {
      console.log("hello");
      failure("Please write lyrics with more than 5 words");
      return false;
    }

    var response = await fetchResult();

    if (response?.hits.length !== 0) {
      var query = response.hits[0].result;
      if (query.artist_names.toLowerCase().includes(artist.toLowerCase())) {
        db
          .collection("players")
          .doc()
          .update({ arrayField: Firestore.FieldValue.arrayUnion("done") })
          .then(() => {
            console.log("collection added");
          })
          .catch((err) => {
            console.log(err);
          });
        success(query.full_title);
        setScore((prev) => [...prev, "done"]);
        setLyrics("");
        setArtist("");
        setPlayer({ ...player, score: player.score + 50 });
      } else {
         db
        .collection("players")
        .doc()
        .update({ arrayField: Firestore.FieldValue.arrayUnion("missed") })
        .then(() => {
          console.log("collection was not added");
        })
        .catch((err) => {
          console.log(err);
        });
        failure("Oh no this is what we got" + query.full_title);
        setScore((prev) => [...prev, "missed"]);
        setLyrics("");
        setArtist("");
        setPlayer({ ...player, score: player.score - 100 });
      }
    } else {
      failure("Ooops!! we couldnt find those lyrics");
      setScore((prev) => [...prev, "missed"]);
      setLyrics("");
      setArtist("");
      setPlayer({ ...player, score: player.score - 100 });
    }
  };

  const fetchResult = async () => {
    try {
      const res = await axios.get("/api/search", {
        headers: {
          Authorization: `Bearer ${geniousConfig.accessToken}`,
        },
        params: {
          q: lyrics,
        },
      });

      return res.data.response;
    } catch (err) {
      console.log("error occurred here ", err);
    }
  };

  const updateResult = async (value) => {
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "scores"), {
      name: displayName,
      score: value,
      uid,
    });
  };
  useEffect(() => {
    updateResult(score);
    console.log("updated result");
  }, [score]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setGameTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setIsRunning(false);
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isRunning]);
  console.log(score);
  return (
    <div className="flex flex-col items-center h-full relative ">
      <div className=" items-center flex justify-around w-96 p-5 rounded bg-orange-700">
        <span>Avatar 1</span>
        <span className="h-full border "></span>
        <span>Avatar 2</span>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center items-center">
          <strong>CountDown time</strong>
          <div className="flex">
            <img
              src={myCustomAvatar(1)}
              alt="avatar1"
              className="w-16 h-16 rounded-lg"
            />
            <div className="bg-blue-950 w-96 p-1 flex gap-2 items-center">
              <Done
                className="text-green-200  font-bold border"
                style={{ fontSize: "40px" }}
              />
              <Cancel
                className="text-red-500 border"
                style={{ fontSize: "40px" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <strong className="">{gameTimer}</strong>
          <div className="flex">
            <img
              onClick={null}
              src={myCustomAvatar(2)}
              alt="avatar1"
              className="w-16 h-16 rounded-lg"
            />
            <div className="bg-blue-950 w-96 p-1 justify-around flex gap-2 items-center    ">
              {score.length !== 0 &&
                score.map((item, i) => (
                  <span key={i}>
                    {item === "done" && (
                      <Done
                        className="text-green-200  font-bold border"
                        style={{ fontSize: "40px" }}
                      />
                    )}
                    {item === "missed" && (
                      <Cancel
                        className="text-red-500 border"
                        style={{ fontSize: "40px" }}
                      />
                    )}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-gray-900 absolute top-1/2 flex flex-col">
        <span>{lyrics}</span>
        <span>~{artist}</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 p-10 gap-5 flex bg-blue-950"
      >
        <input
          type="text"
          className="p-3 w-3/4 text-slate-800"
          placeholder="Enter you lyrics here"
          onChange={(e) => setLyrics(e.target.value)}
          value={lyrics}
          required
        />
        <input
          type="text"
          className="p-3 w-1/4 text-slate-800"
          placeholder="Enter Artist name here"
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

export default Game;
