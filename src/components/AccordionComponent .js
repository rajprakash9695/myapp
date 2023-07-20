import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography variant="h6">Accordion Header</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the content of the accordion. You can add any content you want here.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
