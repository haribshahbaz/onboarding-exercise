import {Button, Modal, TextContainer} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import './Modal.css'

function ModalExample() {
  const [active, setActive] = useState(false); //Intial state changed so the modal doesn't pop up on opening

  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = <Button onClick={handleChange}>Modal: Open</Button>;

  return (
    <div className="modal">
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Reach more shoppers with Instagram product tags"
        primaryAction={{
          content: 'Add Instagram',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Learn more',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
              Use Instagram posts to share your products with millions of
              people. Let shoppers buy from your store without leaving
              Instagram.
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}


export default ModalExample;