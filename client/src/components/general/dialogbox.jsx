import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import videoChannels1 from '../../pages/videoChannels';
import videoChannels2 from '../../pages/voiceChannels';

const SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ backgroundColor: '#181521', color: '#ffffff' }}>Choose Channel</DialogTitle>
      <List sx={{ pt: 0, backgroundColor: '#181521', color: '#392b65' }}>
        {[...videoChannels1, ...videoChannels2].map((videoChannel) => (
          <ListItem disableGutters key={videoChannel}>
            <ListItemButton 
              sx={{ '&:hover': { color: '#ea9022' } }} // Change color on hover
              onClick={() => handleListItemClick(videoChannel)}
            >
              <ListItemText primary={videoChannel} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const DialogButton = () => {
  const history = useNavigate(); 
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  useEffect(() => {
    // Check if it's a video channel or voice channel and redirect accordingly
    if (selectedValue.startsWith("Video Channel")) {
      const channelNum = selectedValue.split(" ")[2];
      history(`/room/${channelNum}`);
    } else if (selectedValue.startsWith("Voice Channel")) {
      const channelNum = selectedValue.split(" ")[2];
      history(`/rooms/${channelNum}`);
    }
  }, [selectedValue, history]);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: '20px',
          backgroundColor: '#13111b',
          border: 1,
          borderWidth: '2px',
          borderColor: '#392b65',
          width: '14%',
          '&:hover': {
            backgroundColor: '#13111b',
            borderColor: '#ea9022',
          },
          marginTop: 0,
          marginLeft: 3,
          textAlign: 'left',
        }}
        onClick={handleClickOpen}
      >
        JOIN CHANNEL
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default DialogButton;
