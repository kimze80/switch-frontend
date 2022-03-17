import React, { useCallback, useState, useContext } from 'react';
import { Container, Button, Content } from './styles';
import selectUpIcon from '../../assets/select-up.svg';
import selectDownIcon from '../../assets/select-down.svg';
import checkIcon from '../../assets/check.svg';
import Checkbox from '../Checkbox';
import { SyncContext } from '../../context/SyncContext';

type emailGroup = {
  id: string;
  name: string;
};

interface SelectProps {
  data: emailGroup[];
}

const Select: React.FC<SelectProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const { selectedData, setSelectedData } = useContext(SyncContext);

  const handleClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelectedData([
          ...selectedData,
          {
            id: e.target.id,
            name: e.target.name,
          },
        ]);
      } else {
        setSelectedData(selectedData.filter((item) => item.id !== e.target.id));
      }
    },
    [selectedData, setSelectedData],
  );

  return (
    <Container
      expanded={expanded}
      data-testid={expanded ? 'select-expanded' : 'select-closed'}
    >
      <Button onClick={handleClick}>
        <img src={checkIcon} alt="" />
        All contacts
        <img src={expanded ? selectUpIcon : selectDownIcon} alt="" />
      </Button>
      <Content expanded={expanded}>
        {data ? (
          data.map((list) => (
            <Checkbox
              key={list.id}
              id={list.id}
              name={list.name}
              label={list.name}
              value={list.name}
              onChange={handleChange}
            />
          ))
        ) : (
          <span>No list</span>
        )}
      </Content>
    </Container>
  );
};

export default Select;
