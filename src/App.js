
import './App.css';
import React,{useState} from "react";

function App() {

  var emojiDictionary = {
    "💦" :"Sweat Droplets",
    "🙈" :"See-No-Evil Monkey",
    "🙉" :"Hear-No-Evil Monkey",
    "🙊" :"Speak-No-Evil Monkey",
    "💥" :"Collision",
    "💫" :"Dizzy",
    "💨" :"Dashing Away",
    "🐵" :"Monkey Face",
    "🐒" :"Monkey",
    "🦍" :"Gorilla",
    "🦧" :"Orangutan",
    "🐶" :"Dog Face",
    "🐕" :"Dog",
    "🦮" :"Guide Dog",
    "🐕‍🦺" :"Service Dog",
    "🐩" :"Poodle",
    "🐺" :"Wolf",
    "🦊" :"Fox",
    "🦝" :"Raccoon",
    "🐱" :"Cat Face",
    "🐈" :"Cat",
    "🦁" :"Lion",
    "🐯" :"Tiger Face",
    "🐅" :"Tiger",
    "🐆" :"Leopard",
    "🐴" :"Horse Face",
    "🐎" :"Horse",
    "🦄" :"Unicorn",
    "🦓" :"Zebra",
    "🦌" :"Deer",
    "🦬" :"Bison",
    "🐮" :"Cow Face",
    "🐂" :"Ox",
    "🐃" :"Water Buffalo",
    "🐄" :"Cow",
    "🐷" :"Pig Face",
    "🐖" :"Pig",
    "🐗" :"Boar",
    "🐽" :"Pig Nose",
    "🐏" :"Ram",
    "🐑" :"Ewe",
    "🐐" :"Goat",
    "🐪" :"Camel",
    "🐫" :"Two-Hump Camel",
    "🦙" :"Llama",
    "🦒" :"Giraffe",
    "🐘" :"Elephant",
    "🦣" :"Mammoth",
    "🦏" :"Rhinoceros",
    "🦛" :"Hippopotamus",
    "🐭" :"Mouse Face",
    "🐁" :"Mouse",
    "🐀" :"Rat",
    "🐹" :"Hamster",
    "🐰" :"Rabbit Face",
    "🐇" :"Rabbit",
    "🐿️" :"Chipmunk",
    "🦫" :"Beaver",
    "🦔" :"Hedgehog",
    "🦇" :"Bat",
    "🐻" :"Bear",
    "🐻‍❄️" :"Polar Bear",
    "🐨" :"Koala",
    "🐼" :"Panda",
    "🦥" :"Sloth"
  };

  var emojisWeKnow= Object.keys(emojiDictionary);
  const [emojiMeaning, setEmojiMeaning]  = useState(""); 



  function inputChangeHandler(event){
    
    var meaning = emojiDictionary[event.target.value];
    console.log(meaning);
    if(meaning === undefined){
      
      setEmojiMeaning("We do not have entered emoji in our database");
    }else{
      setEmojiMeaning(meaning);
    }
    
  }

  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    if(meaning===undefined){
      setEmojiMeaning("We do not have entered emoji in our database");
    }else{
      setEmojiMeaning(meaning);
    }
  }



  return (
    <div className="App">
     
     <h1>Welcome to Emoji Translator</h1>
      <p id='id-p-description'>Enter a emoji or select one from below to know it meaning</p>
      
      <input id="id-input-field" placeholder="Enter emoji here" onChange={inputChangeHandler}></input>

    <div id="id-div-output">{emojiMeaning}</div>

    <div id="id-div-emojis">
      <ul id="id-list">

        {
           emojisWeKnow.map((emoji) =>
            <li  id="id-list-item" key={emoji}
            
            onClick={()=>emojiClickHandler(emoji)}>{emoji}</li>
          )

  
        }

      </ul> 
    </div>

    </div>
  );
}

export default App;
