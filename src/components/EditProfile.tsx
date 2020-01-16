import React from "react";
import { Card, Button, Image, Spinner } from "react-bootstrap";
import ipfs from "../configs/ipfs";
import { UserContext } from "../contexts/userProvider";
import { useWeb3Context } from "web3-react";
import { useFactoryContract } from "../contexts/contractEffects";

export const EditProfile: React.FC = () => {
  const { imageHash } = React.useContext(UserContext).state;
  const { updateImage } = useFactoryContract();
  const [ipfsHash, setIpfsHash] = React.useState<string>("");
  const [sending, setSending] = React.useState<boolean>(false);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [buffer, setBuffer] = React.useState<any>("");
  const previewSrc = ipfsHash
    ? `https://ipfs.infura.io/ipfs/${ipfsHash}`
    : "holder.svg";

  const imageSrc = imageHash
    ? `https://ipfs.infura.io/ipfs/${imageHash}`
    : "holder.svg";

  const onImageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    ipfs.add(buffer, async (error: Error, result: any) => {
      if (!error) setIpfsHash(result[0].hash);
      setSending(false);
    });
  };

  const captureFile = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const buff = Buffer.from(reader.result as ArrayBuffer);
      setBuffer(buff);
    };
  };

  const onImageSave = () => {
    updateImage(ipfsHash);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className='edit-profile'>
      <Card className='text-center' style={{ border: "none" }}>
        <Card.Body>
          {!editMode && (
            <div>
              <Card.Title>Profile Image</Card.Title>
              <Image src={imageSrc} roundedCircle />
              <Card.Text></Card.Text>
              <Button variant='primary' onClick={toggleEditMode}>
                Edit Image
              </Button>
            </div>
          )}
          {editMode && (
            <div>
              <Card.Title>Edit Profile Image</Card.Title>
              <Image src={previewSrc} roundedCircle />
              <form onSubmit={onImageSubmit}>
                <input id='imageInput' type='file' onChange={captureFile} />
                {ipfsHash ? (
                  <Button variant='success' onClick={onImageSave}>
                    Update Profile
                  </Button>
                ) : (
                  <Button type='submit' variant='primary' disabled={sending}>
                    {sending ? (
                      <div>
                        <Spinner
                          as='span'
                          animation='grow'
                          size='sm'
                          role='status'
                          aria-hidden='true'
                        />
                        Going Interplanetary...
                      </div>
                    ) : (
                      "Upload Image"
                    )}
                  </Button>
                )}
              </form>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
