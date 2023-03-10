import React, { useState } from "react";
import TextArea from "./TextArea";
import Button from "./Button";

interface Props {
  onSubmit: (text: string) => void;
}

const Form: React.FC<Props> = ({ onSubmit }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <form className="flex flex-col w-full h-full py-14" onSubmit={handleSubmit}>
      <TextArea
        text={text}
        onChange={setText}
        placeholder="Paste in your text"
      />
      <div className="w-full mt-4">
        <Button>SUBMIT</Button>
      </div>
    </form>
  );
};

export default Form;
