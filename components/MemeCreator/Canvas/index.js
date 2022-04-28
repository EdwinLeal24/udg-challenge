/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Card, PopoverInputText, EditMenu, InputFile } from "@components/index";
import {
  Container,
  EditNav,
  MemeImage,
  Label,
  HiddenLink,
} from "./Canvas.style";
import wrapText from "../../../helpers/wrapText";

export const Canvas = ({}) => {
  const [imageSource, setImageSource] = useState("");
  const [font, setFont] = useState("comic");
  const [fontSize, setFontSize] = useState(32);
  const [color, setColor] = useState("#aabbcc");
  const [memeTitle, setMemeTitle] = useState("");
  const [memeDescription, setMemeDescription] = useState("");
  const [downloadOption, setDownloadOption] = useState("jpg");

  const fonts = ["comic", "pacifico", "arial"];
  const downloadOptions = ["jpg", "png", "gif"];

  const canvasRef = useRef();
  const imgRef = useRef();
  const downloadLinkRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;

    // GET THE CONTEXT OF THE CANVAS TO BE ABLE START TO DRAW
    const ctx = canvas.getContext("2d");
    // draw the image at position x: 0 y: 0 width: 900px, height: 600px
    ctx.drawImage(img, 0, 0, 900, 600);
    // define the text properties to be writted on the canvas
    ctx.font = `${fontSize}px ${font === "comic" ? "Comic Sans MS" : font}`;
    ctx.fillStyle = color;

    // wrapText(context, text, x, y, maxWidth, lineHeight)
    wrapText(ctx, memeTitle, 450, 75, 600, 60);
    wrapText(ctx, memeDescription, 450, 450, 600, 60);
  }, [memeTitle, font, fontSize, color, memeDescription, imageSource]);

  const onDownloadClick = () => {
    const canvas = canvasRef.current;
    const canvasURL = canvas.toDataURL();

    const downloadLink = downloadLinkRef.current;
    downloadLink.setAttribute("href", canvasURL);
    downloadLink.click();
  };

  const handleFile = (fileList) => {
    const file = fileList[0];
    const url = URL.createObjectURL(file);

    setImageSource(url);
    setTimeout(() => {
      setMemeTitle("YOUR MEME TITLE HERE");
      setMemeDescription("AND YOUR MEME  DESCRIPTION HERE!");
    }, 200);
  };

  return (
    <>
      <Container>
        <Card>
          <canvas
            ref={canvasRef}
            width={900}
            height={600}
            style={{ borderRadius: "20px" }}
          />
          <MemeImage ref={imgRef} src={imageSource} alt="Image Meme" />
        </Card>

        {!imageSource && (
          <Button bordered color="secondary">
            <Image src="/Upload.svg" width="30" height="30" alt="Upload Icon" />
              
            <Label>
              <InputFile handleFile={handleFile} />
              Upload Image
            </Label>
          </Button>
        )}
        {imageSource && (
          <>
            <EditNav>
              <PopoverInputText
                text={memeTitle}
                inputChange={setMemeTitle}
                label="ADD TITLE"
                placeholder="The title"
              />

              <PopoverInputText
                text={memeDescription}
                inputChange={setMemeDescription}
                label="ADD DESCRIPTION"
                placeholder="Is the meme"
              />
              <EditMenu
                color={color}
                setColor={setColor}
                fonts={fonts}
                setFont={setFont}
                setFontSize={setFontSize}
                downloadOptions={downloadOptions}
                setDownloadOption={setDownloadOption}
              />
              <Button bordered color="success" auto onClick={onDownloadClick}>
                <Image
                  src="/Download.svg"
                  width="30"
                  height="30"
                  alt="Download icon"
                />
              </Button>
              <HiddenLink
                ref={downloadLinkRef}
                download={`your-meme.${downloadOption}`}
              ></HiddenLink>
            </EditNav>
          </>
        )}
      </Container>
    </>
  );
};
