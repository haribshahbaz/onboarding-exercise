import {
  LegacyCard,
  LegacyStack,
  Button,
  Collapsible,
  TextContainer,
  Link,
} from '@shopify/polaris';
import {useState, useCallback} from 'react';

import './Collapsible.css'

function CollapsibleExample() {
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);

  return (
    <div className="collapsible">
      <LegacyCard sectioned>
        <LegacyStack vertical>
          <Button
            onClick={handleToggle}
            ariaExpanded={open}
            ariaControls="basic-collapsible"
          >
            Collapsible: Toggle
          </Button>
          <Collapsible
            open={open}
            id="basic-collapsible"
            transition={{duration: '1000ms', timingFunction: 'ease-in-out'}}
            expandOnPrint
          >
            <TextContainer>
              <p>
                Some text
              </p>
            </TextContainer>
          </Collapsible>
        </LegacyStack>
      </LegacyCard>
    </div>
  );
}

export default CollapsibleExample