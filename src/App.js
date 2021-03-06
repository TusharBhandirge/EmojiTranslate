
import './App.css';
import React,{useState} from "react";

function App() {

  var emojiDictionary = {
    "đĻ" :"Sweat Droplets",
    "đ" :"See-No-Evil Monkey",
    "đ" :"Hear-No-Evil Monkey",
    "đ" :"Speak-No-Evil Monkey",
    "đĨ" :"Collision",
    "đĢ" :"Dizzy",
    "đ¨" :"Dashing Away",
    "đĩ" :"Monkey Face",
    "đ" :"Monkey",
    "đĻ" :"Gorilla",
    "đĻ§" :"Orangutan",
    "đļ" :"Dog Face",
    "đ" :"Dog",
    "đĻŽ" :"Guide Dog",
    "đâđĻē" :"Service Dog",
    "đŠ" :"Poodle",
    "đē" :"Wolf",
    "đĻ" :"Fox",
    "đĻ" :"Raccoon",
    "đą" :"Cat Face",
    "đ" :"Cat",
    "đĻ" :"Lion",
    "đ¯" :"Tiger Face",
    "đ" :"Tiger",
    "đ" :"Leopard",
    "đ´" :"Horse Face",
    "đ" :"Horse",
    "đĻ" :"Unicorn",
    "đĻ" :"Zebra",
    "đĻ" :"Deer",
    "đĻŦ" :"Bison",
    "đŽ" :"Cow Face",
    "đ" :"Ox",
    "đ" :"Water Buffalo",
    "đ" :"Cow",
    "đˇ" :"Pig Face",
    "đ" :"Pig",
    "đ" :"Boar",
    "đŊ" :"Pig Nose",
    "đ" :"Ram",
    "đ" :"Ewe",
    "đ" :"Goat",
    "đĒ" :"Camel",
    "đĢ" :"Two-Hump Camel",
    "đĻ" :"Llama",
    "đĻ" :"Giraffe",
    "đ" :"Elephant",
    "đĻŖ" :"Mammoth",
    "đĻ" :"Rhinoceros",
    "đĻ" :"Hippopotamus",
    "đ­" :"Mouse Face",
    "đ" :"Mouse",
    "đ" :"Rat",
    "đš" :"Hamster",
    "đ°" :"Rabbit Face",
    "đ" :"Rabbit",
    "đŋī¸" :"Chipmunk",
    "đĻĢ" :"Beaver",
    "đĻ" :"Hedgehog",
    "đĻ" :"Bat",
    "đģ" :"Bear",
    "đģââī¸" :"Polar Bear",
    "đ¨" :"Koala",
    "đŧ" :"Panda",
    "đĻĨ" :"Sloth"
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
