import { RcButton, RcPopover, RcTypography } from '@ringcentral/juno';
import React from 'react';
import { FunctionComponent, useState } from 'react';

export interface CustomPopoverProps {}
export const CustomPopover: FunctionComponent<CustomPopoverProps> = ({
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget as HTMLButtonElement);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const child = React.cloneElement(children, {
    onMinimize: handleClose,
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'middle',
      }}
    >
      <RcButton aria-describedby={id} onClick={handleClick}>
        Open Popover
      </RcButton>
      <RcPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        marginThreshold={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={handleClose}
      >
        {child}
      </RcPopover>
    </div>
  );
};
