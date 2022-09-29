import React, {useState} from 'react';
import { Box, Hidden } from '@mui/material';
import Checkbox from "../Checkbox"

const styles = {
  root: {
    display: "inline-block",
    borderRadius: "21px",
    backgroundColor: "common.white",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "grey.200",
    overflow: "hidden",
    transition: "box-shadow 300ms ease",

    "&&:hover": {
      boxShadow: 5
    }
  },
  bottom: {
    padding: "0.25rem 1.125rem"
  },
  cover: {
    height: "100px",
    img: {
      display: "block",
      maxHeight: "100%",
      maxWidth: "100%",
      objectFit: 'cover'
    }
  },
  checked: {
    borderColor: "primary.dark"
  }
}

interface CheckboxProps {
  onClick?: () => void;
  onChange?: (e:React.FormEvent<HTMLInputElement>) => void;
  label?: string;
}

const LayerCard = ({
  label,
  ...props
}: CheckboxProps) => {
  
  const {onChange, ...rest} = props
  const [checked, setChecked] = useState(false)

  const onCheckBoxChange = (e:React.FormEvent<HTMLInputElement>) => {
    if(onChange) onChange(e)

    const target = e.target as HTMLInputElement;

    setChecked(target.checked)
  }

  return (
    <Box {...rest} sx={{...styles.root, ...checked ? styles.checked : {}}}>
      <Box sx={styles.cover}>
        <img src="CardMedia.png" alt="" />
      </Box>
      <Box sx={styles.bottom}>
        <Checkbox label={label ? label : ""} onChange={onCheckBoxChange} />
      </Box>
    </Box>
  );
};

export default LayerCard
