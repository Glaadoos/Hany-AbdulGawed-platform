// import { writeFileSync } from 'fs';
// import Codes from './codes.json' assert { type: "json" };

const codesapi = "http://localhost:8888/.netlify/functions/api/calculus";

const generateCodes = (times, num) => {
  let pass = "";
  let array = [];
  let arrayOfcodes = [];
  let str = "ABCDEFGHJKLMNOPQRSTUVWXYZ" + "abcdefghijkmnopqrstuvwxyz0123456789";
  for (let time = 0; time < times; time++) {
    for (let j = 0; j < num; j++) {
      for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length);

        pass += str.charAt(char);
      }
      array.push(pass);
      pass = "";
    }
    // console.log(array)
    arrayOfcodes.push(array);
    array = [];
  }
  console.log(arrayOfcodes);
};
const getYoutubeVideoDuration = async (videoId) => {
  // const key1 = 'AIzaSyD8F0boLyJ33MtuH0V2f2t67Fip6QSZGFg'
  const key = "AIzaSyAXPC5sP8ItkyMaVY5akzqqWvtjsYf1qfc";
  const url = `https://www.googleapis.com/youtube/v3/videos?key=${key}&part=contentDetails&id=${videoId}`;
  let res;
  try {
    res = await fetch(url).then((res) => res.json());
  } catch (err) {
    console.log(err);
  }
  const data = await res;

  var match = data.items[0].contentDetails.duration.match(
    /PT(\d+H)?(\d+M)?(\d+S)?/
  );
  match = match.slice(1).map((x) => {
    if (x != null) {
      return x.replace(/\D/, "");
    }
    return x;
  });
  var hours = parseInt(match[0]) || 0;
  var minutes = parseInt(match[1]) || 0;
  var seconds = parseInt(match[2]) || 0;
  console.log(videoId, `${hours}:${minutes}:${seconds}`);
};

const createCode = async (order, code) => {
  let res;
  const Code = {
    order: order,
    code: code,
  };

  let optiones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Code),
  };
  try {
    res = await fetch(`${codesapi}`, optiones);
  } catch (err) {
    console.error(err);
  }
  let returnState = await res.status;
  let awaitReturnMessage = await res.json();
  let returnMessage = await awaitReturnMessage.message;
  console.log([returnMessage], "==>", returnState);
};
const deleteUser = async (id) => {
  let res;
  let optiones = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(id);
  try {
    res = await fetch(`${codesapi}/?order= ${id}`, optiones);
  } catch (err) {
    console.error(err);
  }
};

const workDone = async () => {
  let arr = [
    
  ];
  // generateCodes(1,60)
  let r = ["calculus25","calculus26"];
   
   /*  for(let i = 0;i<r.length;i++){
      createCode(r[i], arr[i]);
    }  */
 
  
  /* 
    let x = 0;
    while(x<=5){
      fetch("http://localhost:8888/.netlify/functions/api/calculus/?order=calculus24",{ method: 'DELETE'})
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      x++
    } 
  */
};
workDone();
