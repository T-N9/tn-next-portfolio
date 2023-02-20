import React from "react";
import Image from "next/image";

const Greetings = () => {
  const date = new Date();
  let day = date.getDay();
  let titleText = "";
  let dayText = "";
  let emojiText = "";

  switch (day) {
    case 0:
      titleText = "God bless...";
      dayText = "Have a beautiful Sunday.";
      emojiText = "/wishes/sunday.svg";
      break;
    case 1:
      titleText = "Stay sharp!";
      dayText = "Have a great Monday.";
      emojiText = "/wishes/monday.svg";
      break;
    case 2:
      titleText = "Be positive.";
      dayText = "Have a fantastic Tuesday.";
      emojiText = "/wishes/tuesday.svg";
      break;
    case 3:
      titleText = "Stay fresh.";
      dayText = "Have a winning Wednesday.";
      emojiText = "/wishes/wednesday.svg";
      break;
    case 4:
      titleText = "Brave and bold.";
      dayText = "Have an awesome Thursday.";
      emojiText = "/wishes/thursday.svg";
      break;
    case 5:
      titleText = "TGIF!!!";
      dayText = "Have an amazing weekend.";
      emojiText = "/wishes/friday.svg";
      break;
    case 6:
      titleText = "Be happy.";
      dayText = "Have a super Saturday.";
      emojiText = "/wishes/saturday.svg";
      break;
    default:
      break;
  }

  return (
    <>
      <div className="greeting_txt">
        <h1 className="greeting_txt--wish">
          <span>{titleText}</span>
          <span>{dayText}</span>
          <span className="emoji">
            <Image quality={100} width={280} height={100} src={emojiText} alt={dayText} />
          </span>
        </h1>
      </div>
    </>
  );
};

export default Greetings;
