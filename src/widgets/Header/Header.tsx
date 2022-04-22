import React from 'react';
import { ArrowBack } from 'tabler-icons-react';

import Avatar from '@/entities/Avatar/Avatar';
import Button from '@/entities/Button/Button';

const Header = () => {
  return (
    <div className="header-wrapper">
      <Button radius="2">
        <ArrowBack size={30} />
      </Button>
      <Button radius="2">
        <Avatar
          src={
            'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
          }
        />
      </Button>
    </div>
  );
};

export default Header;
